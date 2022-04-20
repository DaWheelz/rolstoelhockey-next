import React, { Component, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const secret = process.env.TOKEN_SECRET;

export default function Login(req, res) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([username, password]);
    const [errormessage, setErrorMessage] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const router = useRouter();


    const validUser = () => {
        const Joi = require('joi');

        const schema = Joi.object({
            username: Joi.string()
                .regex(/(^[a-zA-Z0-9_]*$)/)
                .min(2)
                .max(30)
                .required(),

            password: Joi.string().min(5).required(),
        });
        const user = {
            username: username,
            password: password
        }
        const result = schema.validate(user);

        if (!result.error) {
            setLoggedIn(true);
            return true;
        }
        return false;
    }

    const handleSubmit = async (e) => {
        const LOGIN_URL = "https://rolstoelhockey-backend.herokuapp.com/auth/login/";
        e.preventDefault();
        if (validUser()) {
            const body = {
                username: username,
                password: password
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
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
                    return response.json()
                }
                return response.json().then((error) => {
                    setErrorMessage(error);
                    throw new Error(error.message);
                });
            }).catch((error) => {
                setTimeout(() => {
                    setErrorMessage(error.message);
                }, 1000);
            });
        } 
    };

    return (
        <div className="pageblock">
            <div className="jumbotron">
                <h1 className="display-3">Login</h1>
                {errormessage ? <div className="alert alert-danger" role="alert">
                    {errormessage}
                </div> : null}
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="username">Gebruikersnaam</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
            </div>
        </div >
    )
};