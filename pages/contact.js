import React, { Component } from 'react'
import axios from 'axios'

var bgColors = {
    "Default": "#81b71a",
    "Button-Color": "#ef790c"
};

class Contact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
        this.onChangeTextArea = this.onChangeTextArea.bind(this);
        this.sendEmail = this.sendEmail.bind(this);

        this.state = {
            name: '',
            email: '',
            succes_message: false,
            message: '',
            sort: '',
            mailSend: false
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangeCheckBox(e) {
        this.setState({
            sort: e.target.value
        })
    }
    onChangeTextArea(e) {
        this.setState({
            message: e.target.value
        })
    }

    sendEmail(e) {
        e.preventDefault();
        this.setState({ mailSend: true })

        const info = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            sort: this.state.sort
        }

        axios.post('https://rolstoelhockey-backend.herokuapp.com/mail/send', info)
            .then(response => {
                console.log("res: " + response);
            })
        setTimeout(() => {
            this.props.history.push('/');
            window.location.reload(true);
        }, 1000);
    }

    render() {
        return (
            <div>
      <div
        class="max-w-screen-xl mt-20 mb-20 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mx-auto text-gray-900">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Feedback? <br/>Ik hoor het graag!</h2>
            <div class="text-gray-700 mt-8">
              Liever geen formulier? Stuur een <a href="mailto:rolstoelhockeyapp@gmail.com"><span class="underline">email</span></a>
            </div>
          </div>
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Naam</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Bericht</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Verzenden
            </button>
          </div>
        </div>
      </div>
            </div>
            // <div className="pageblock" style={{ display: 'flex', justifyContent: 'center' }}>
            //     <div style={{ textAlign: 'center', border: '1px solid #dadada', padding: '20px', backgroundColor: 'white', borderRadius: '.1875rem', boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)' }}>
            //         <div style={{ display: 'flex', justifyContent: 'center' }}>
            //             <h1 style={{ marginLeft: 'auto', marginRight: '-10%'}}>Contact</h1>
            //             <form style={{ marginLeft:'auto', marginRight:0}} action="http://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            //                 <input type="hidden" name="cmd" value="_s-xclick" />
            //             <input type="hidden" name="hosted_button_id" value="A9RHBD5MVLKU4" />
            //             </form>
            //     </div>
            //     <p>Bij vragen neem contact op door het onderstaand formulier in te vullen. </p>
            //     <div >
            //         <p>Om deze app mogelijk te maken zijn alle donaties meer dan welkom! </p>
            //         <p>Deze donaties worden alleen gestopt in het verbeteren en mogelijk (hosting / domeinkosten) maken van deze app.</p>
            //     </div>
            //     {this.state.mailSend
            //         ?
            //         <div className="alert alert-success" role="alert">
            //             Het formulier is succesvol verstuurd!
            //         </div>
            //         :
            //         <form onSubmit={this.sendEmail} >
            //             <div>
            //                 <div className="form-group" >
            //                     <input type="text"
            //                         className="form-control"
            //                         onChange={this.onChangeName}
            //                         placeholder="Naam"
            //                         required>
            //                     </input>
            //                 </div>
            //                 <div className="form-group" >
            //                     <input type="email"
            //                         className="form-control"
            //                         onChange={this.onChangeEmail}
            //                         placeholder="Email"
            //                         required>
            //                     </input>
            //                 </div>
            //                 <div className="form-group">
            //                     <div style={{ display: 'flex' }}>
            //                         <div className="custom-control custom-checkbox custom-control-inline">
            //                             <input type="checkbox" value="Bug" className="custom-control-input" id="checkboxBug" onChange={this.onChangeCheckBox} />
            //                             <label className="custom-control-label" htmlFor="checkboxBug">Bug/probleem</label>
            //                         </div>
            //                         <div className="custom-control custom-checkbox custom-control-inline">
            //                             <input type="checkbox" value="Question" className="custom-control-input" id="checkboxQuestion" onChange={this.onChangeCheckBox} />
            //                             <label className="custom-control-label" htmlFor="checkboxQuestion">Vraag</label>
            //                         </div>
            //                         <div className="custom-control custom-checkbox custom-control-inline">
            //                             <input type="checkbox" value="Bug" className="custom-control-input" id="checkboxOther" onChange={this.onChangeCheckBox} />
            //                             <label className="custom-control-label" htmlFor="checkboxOther">Anders...</label>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="form-group" >
            //                     <textarea className="form-control" placeholder="Vertel meer..." id="exampleFormControlTextarea1" onChange={this.onChangeTextArea} rows="3"></textarea>
            //                 </div>
            //                 <div className="form-group">
            //                     <button type="submit" label="Primary" style={{ backgroundColor: bgColors["Button-Color"], color: 'white', border: 'none', borderRadius: '10px', padding: '7px' }}>Verstuur</button>
            //                 </div>
            //             </div>
            //         </form>}
            // </div>
            // </div >
        );
    }
}
export default Contact;
