import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const router = useRouter();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
            },
            errorMessage: '',
            loggingIn: false,
            token: '',
        }
    }

    Login(e) {
        const LOGIN_URL = "https://rolstoelhockey-backend.herokuapp.com/auth/login/";
        e.preventDefault();
        this.setState({ errorMessage: '' })
        if (this.validUser()) {
            this.setState({ loggingIn: true });
            const body = {
                username: this.state.user.username,
                password: this.state.user.password
            }
            fetch(LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body)
            }).then((response) => {
                
                if (response.ok) {
                    return response.json()
                }
                return response.json().then((error) => {
                    this.setState({ errorMessage: error })
                    throw new Error(error.message);
                });
            }).then((result) => {
                sessionStorage.setItem('token', result.token)
                sessionStorage.setItem('role', result.role)
                setTimeout(() => {
                    this.setState({ loggingIn: true });
                    router.push('/');
                }, 1000);
            }).catch((error) => {
                setTimeout(() => {
                    this.setState({ loggingIn: false });
                    this.setState({ errorMessage: error.message });
                }, 1000);
            });
        }
    }

    onChangeUsername(e) {
        this.setState({
            user: {
                username: e.target.value,
                password: this.state.user.password,
            }
        });
    }
    onChangePassword(e) {
        this.setState({
            user: {
                username: this.state.user.username,
                password: e.target.value,
            }
        });
    }

    validUser() {
        const Joi = require('joi');

        const schema = Joi.object({
            username: Joi.string()
                .regex(/(^[a-zA-Z0-9_]*$)/)
                .min(2)
                .max(30)
                .required(),

            password: Joi.string().min(5).required(),
        });
        console.log('before validate')
        const result = schema.validate(this.state.user);

        if (!result.error) {
            console.log('validated')
            this.setState({ loggedIn: true });
            return true;
        }
        // if (result.error.message.includes('username')) {
        //     this.setState({ errorMessage: 'Username is invalid.' })
        // } else {
        //     this.setState({ errorMessage: 'Password is invalid.' })
        // }

        return false;
    }

    render() {
        return (
            <div className="pageblock">
                <div className="jumbotron">
                    <h1 className="display-3">Login</h1>
                    {this.state.errorMessage ? <div className="alert alert-danger" role="alert">
                        {this.state.errorMessage}
                    </div> : null}
                    {!this.state.loggingIn ?
                        <form onSubmit={e => this.Login(e)}>
                            <div className="form-group">
                                <label htmlFor="username">Gebruikersnaam</label>
                                <input
                                    onChange={this.onChangeUsername.bind(this)}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="usernameHelp"
                                    placeholder="Voer gebruikersnaam in"
                                    required />
                                <h5 id="usernameHelp" className="form-text text-muted">
                                    Voer je gebruikersnaam in om in te loggen.
                             </h5>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Wachtwoord</label>
                                <input
                                    onChange={this.onChangePassword.bind(this)}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    aria-describedby="passwordHelp"
                                    placeholder="Wachtwoord"
                                    autoComplete={false}
                                    required />
                                <h5 id="passwordHelp" className="form-text text-muted">
                                    Voer je wachtwoord in om in te loggen.
                             </h5>
                                <br />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <label>Nog geen account?
                                <Link href="/signup">
                                    <button type="button" className="btn btn-default btn-xs" style={{ margin: '0px', paddingTop: '2px', color: '#ef790c' }}>Registreer</button>
                                </Link>
                                </label>
                            </div>
                        </form>
                        : null}
                </div>
            </div >
        )
    }
}

export default Login;