import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: black;
  text-decoration: none !important;
}
li {
    text-decoration: none;
}
* {
  box-sizing: border-box;
}

.gridstyle {
  margin-top: 4rem;
}

.match-title {
    font-weight: 600;
    font-size: 26px;
    margin-top: 20px;
}

.blockstyle {
  width: 100%;
  min-height: 500px;
  border-radius: 25px;
  margin: 10px;
}

.rowstyle {
  width: 100%;
  margin-right: 10px;
}

.MuiSwitch-colorPrimary{
color: #ef790c
}

.home-matches{
  border: 1px solid #dadada;
  background-color: white;
  border-radius: .1875rem;
  box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
}

.home-events{
  border: 1px solid #dadada;
  background-color: white;
  border-radius: .1875rem;
  box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
}

.event {
  width: 100%;
      padding: 10px;
      margin: 10px 0px 10px 0px;
      border-bottom: 1px solid grey;
}

@media (min-width: 1251px) {

  .pageblock {
      margin: 20px 20px 20px 20px;
  }
  .home-div1 {
      display: flex;
  }
  .googlemaps-icon{
      margin-right: 4%;
      margin-top: 10%;
  }
  .event-mid{
      display: flex;
  }
  .home-events{
      width:50%;
      margin: 10px;
  }
  .navbar_menu_items{
      display: flex;
      flex-direction: row;
  }
  .home-matches{
      width: 50%;
      margin: 10px;
      border: 1px solid #dadada;
      padding: 20px;
      background-color: white;
      border-radius: .1875rem;
      box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
  }
  .profile_pageblock{
      border: 1px solid rgb(218, 218, 218);
      padding: 20px;
      background-color: white;
      border-radius: 0.1875rem;
      box-shadow: rgba(39, 39, 39, 0.1) 0px 1px 15px 1px;
      margin: auto;
      margin-top: 20px;
      justify-content: center;
      display: flex;
      max-width: 65%
  }
  .profile_information {
      width: 50%;
  }
  .profile_pic_subscribe{
      width: 50%;
  justify-content: center;
  display: flex;
  height: fit-content;
  margin: auto;
  }
}

/* mobile */
@media (max-width: 1250x) {
    
  .event {
      width: 100%;
      padding: 10px;
      margin: 10px 0px 10px 0px;
      border-bottom: 1px solid grey;
  }
  .event-mid{
      display: flex;
  }
  .home-events{
      margin-left: 0px;
      margin-top: 20px;
  }
  .home-matches{
      width: 50%;
      margin: 10px;
      border: 1px solid #dadada;
      padding: 20px;
      background-color: white;
      border-radius: .1875rem;
      box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
  }
  .googlemaps-icon{
      margin-top: 10px;
      margin-left: 5px;
  }
  .navbar_menu_items{
      display: flex;
      flex-direction: column;
  }
  
  .navbar_subitems{
      font-size: large;
  }
  .pageblock {
      margin: 20px 20px 20px 20px;
  }
  .gridstyle {
      flex-direction: column;
  }
  .blockstyle {
      margin: 0px;
      min-height: 500px;
      border-radius: 25px;
      background-color: rgb(190, 190, 190);
      margin-bottom: 5px;
  }
  .profile_pageblock{
      border: 1px solid rgb(218, 218, 218);
      padding: 20px;
      background-color: white;
      border-radius: 0.1875rem;
      box-shadow: rgba(39, 39, 39, 0.1) 0px 1px 15px 1px;
      margin: 20px;
      justify-content: center;
  }
  .profile_information {
      width: 100%;
  }
  .profile_pic_subscribe{
      width: 50%;
  justify-content: center;
  display: flex;
  height: fit-content;
  margin: auto;
  }
  
}


.match-group{
    padding: 10px;
    display: flex;
    margin: 10px 00px 10px 0px;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    color: rgb(46, 46, 46);
    border-bottom: 1px solid grey;
}
.clubheader{
    display: flex;
}
.clubnameheader{
    margin-left:10%;
    font-weight: 100;
}
.clubaddressheader{
    margin-left: 17%;
    font-weight: 100;
}
.match-time{
    font-size: small;
    width: 20%;
}
.match-date{
    font-size: small;
    margin-left: 20px;
    width: 7rem;
}
.match-teama{
    font-size: small;
    width: 30%;
}
.match-teamb{
    font-size: small;
    width: 30%;
}
.match-score{
    font-size: 17;
    width: 20%;
    text-align: center;
}

@media only screen and (min-width: 600px){
    .link{
        float: right;
        font-weight: 100;
    }
    .clubnameinfo{
        width: 30%;
        font-weight: 100;
    }
    .clubaddressinfo{
        width:40%;
        font-weight: 100;
    }
    .search-bar{
        display: flex;
    }

    .match-time-date {
        display:flex;
    }
}

@media only screen and (max-width: 600px){
    .link{
        margin-left: 30%;
        font-weight: 100;
    }
    .clubnameinfo{
        width: 30%;
        font-weight: 100;
    }
    .clubaddressinfo{
        width:40%;
        font-weight: 100;
    }
    .search-bar{
        display: block;
    }
    .match-date {
        margin-left: 0px;
    }
}

.box-score{
    width: 20%;
    text-align: center;
}

.custom-select {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
    font-size: 18px;
    color: #60666d;
    border-color: #fafafa;
    box-shadow: rgba(39, 39, 39, 0.1) 0px 1px 4px 1px;
    user-select: none;
    -moz-appearance: none;
    width: 100%;
}

select:active, select:hover {
  outline: none
}

.search-button{
    border-radius: 12px;
    margin-left: 12px;
    border: none;
    color: white;
    width: 38px;
    height: 38px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    font-size: small;
}
.button {
    border-radius: 12px;
    background-color: #ff7b00;
    color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    padding:5px;
    height: 36px;
}
a:hover {
    color: white;
    }

    @media (max-width: 768px){
        .toolbar__logo {
            margin-left: 1%;
            width: 100px;
        }
        .toolbar_login {
            margin-left: 2%;
            width: 6%;
        }
        a {
            width: 40%;
        }
    }
    
    @media (min-width: 769px){
        .toolbar__logo {
            margin-left: 1%;
            width: 100px;
        }
        .toolbar_login {
            margin-left: 2%;
            width: 6%;
        }
    }

    .login_icon {
        width: 25px;
        height:25px;
    }

    .backdrop{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background:black;
        background:rgba(0,0,0,0.8);
    
        z-index: 100;
    }
    .toggle-button{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 24px;
        width: 30px;
        background: transparent;
        border: none;
        padding: 0;
    }
    
    .toggle-button:focus {
        outline: none;
    }
    
    .toggle-button__line {
        width: 30px;
        height: 2px;
        background: white;
    }
    .side-drawer{
        height: 100%;
        background: white;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0);
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        max-width: 400px;
        z-index: 200;
        transform: translateX(-100%);
        transition: transform 0.3s ease-out;
    }
    
    .side-drawer li {
        margin: 0.5rem 0;
    }
    
    .side-drawer.open {
        transform: translateX(0);
    }
    .side-drawer.hide {
        transform: translateX(-100%);
    }
    
    .side-drawer ul {
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    
    .side-drawer a {
        font-family: Source Sans Pro Webfont,Helvetica Neue,Segoe UI,arial,"sans-serif";
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: #ef790c;
        font-size: 1.9rem;
        transition: background-color .3s ease-out 0s,height .3s ease-out 0s,line-height .3s ease-out 0s;
    }
    
    .side-drawer a:hover,
    .side-drawer a:active{
        color: #ef790c;
    }
    
    @media (min-width: 769px){
        .side-drawer {
            display: none;
        }
    }
    .cards {
        display: flex;
    }
    
    @media(max-width: 759px){
        .cards{
            flex-direction: column;
        }
    }

    .card {
        display: initial;
        border-radius: 20px;
        background: white;
        text-align: center;
        margin-bottom: 20px;
        margin: 15px;
        border: 1px solid rgb(211, 211, 211);
        padding: 10px;
       }
      .card-text p {
        color: grey;
        font-size:15px;
        font-weight: 300;
        text-align: left;
      }
      .linktext{
        text-decoration: none;
        color: white;
      }
      .fblink{
        text-decoration: none;
        color: gray;
        margin: 10px; 
        flex-direction: column;
      }
      .card:hover{
        background: rgb(221, 221, 221);
      }
      
      .popup {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: rgba(0,0,0, 0.5);
      }
      .popup_inner {
        position: absolute;
        left: 25%;
        right: 25%;
        top: 25%;
        bottom: 25%;
        margin: auto;
        background: white;
      }

      
      .gridstyle {
        margin-top: 4rem;
    }
    
    .blockstyle {
        width: 100%;
        min-height: 500px;
        border-radius: 25px;
        margin: 10px;
    }
    
    .rowstyle {
        width: 100%;
        margin-right: 10px;
    }
    
    .MuiSwitch-colorPrimary{
      color: #ef790c
    }
    
    .home-matches{
        margin: 10px;
        border: 1px solid #dadada;
        padding: 20px;
        background-color: white;
        border-radius: .1875rem;
        box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
    }
    
    .home-events{
        margin: 10px;
        border: 1px solid #dadada;
        padding: 20px;
        background-color: white;
        border-radius: .1875rem;
        box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
    }
    
    .event {
        width: 100%;
            padding: 10px;
            margin: 10px 0px 10px 0px;
            border-bottom: 1px solid grey;
    }
    
    @media (min-width: 1231px) {
        .pageblock {
            margin: 20px 20px 20px 20px;
        }
        .home-div1 {
            display: flex;
        }
        .googlemaps-icon{
            margin-right: 4%;
            margin-top: 10%;
        }
        .event-mid{
            display: flex;
        }
        .home-events{
            width:50%;
            margin: 10px;
        }
        .navbar_menu_items{
            display: flex;
            flex-direction: row;
        }
        .home-matches{
            width: 50%;
            margin: 10px;
            border: 1px solid #dadada;
            padding: 20px;
            background-color: white;
            border-radius: .1875rem;
            box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
        }
        .profile_pageblock{
            border: 1px solid rgb(218, 218, 218);
            padding: 20px;
            background-color: white;
            border-radius: 0.1875rem;
            box-shadow: rgba(39, 39, 39, 0.1) 0px 1px 15px 1px;
            margin: auto;
            margin-top: 20px;
            justify-content: center;
            display: flex;
            max-width: 65%
        }
        .profile_information {
            width: 50%;
        }
        .profile_pic_subscribe{
            width: 50%;
        justify-content: center;
        display: flex;
        height: fit-content;
        margin: auto;
        }
    }
    
    /* mobile */
    @media (max-width: 1230x) {
        .event {
            width: 100%;
            padding: 10px;
            margin: 10px 0px 10px 0px;
            border-bottom: 1px solid grey;
        }
        .event-mid{
            display: flex;
        }
        .home-events{
            margin-left: 0px;
            margin-top: 20px;
        }
        .home-matches{
            width: 50%;
            margin: 10px;
            border: 1px solid #dadada;
            padding: 20px;
            background-color: white;
            border-radius: .1875rem;
            box-shadow: 0 1px 15px 1px rgba(39,39,39,.1);
        }
        .googlemaps-icon{
            margin-top: 10px;
            margin-left: 5px;
        }
        .navbar_menu_items{
            display: flex;
            flex-direction: column;
        }
        .navbar_items a{
            font-size: xx-large;
            color: white;
        }
        .navbar_subitems{
            font-size: large;
        }
        .pageblock {
            margin: 20px 20px 20px 20px;
        }
        .gridstyle {
            flex-direction: column;
        }
        .blockstyle {
            margin: 0px;
            min-height: 500px;
            border-radius: 25px;
            background-color: rgb(190, 190, 190);
            margin-bottom: 5px;
        }
        .profile_pageblock{
            border: 1px solid rgb(218, 218, 218);
            padding: 20px;
            background-color: white;
            border-radius: 0.1875rem;
            box-shadow: rgba(39, 39, 39, 0.1) 0px 1px 15px 1px;
            margin: 20px;
            justify-content: center;
        }
        .profile_information {
            width: 100%;
        }
        .profile_pic_subscribe{
            width: 50%;
        justify-content: center;
        display: flex;
        height: fit-content;
        margin: auto;
        }
        
    }

    
.btn-primary{
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    font-family: Verdana;
    font-size: 21px;
    font-weight: bold;
    padding: 13px 32px;
}

.btn-warning{
    margin-right: 20px;
    margin-top: 20px;
    font-family: Verdana;
    font-size: 21px;
    font-weight: bold;
    padding: 13px 32px;
}

.btn-outline-success{
    margin-top: 15px;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-left: 40px;
    padding: 20px;
}

.btn-outline-danger{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-left: 40px;
    padding: 20px;
}

.card {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    border: none;
}

.transparant-btn {
    background-color: transparent;
    border: none;
    outline: none;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */

input[type=number] {
    -moz-appearance: textfield;
}

a:hover {
    color: white;
}

@media only screen and (max-width: 900px) {
    .mobile-score-input {
        background-color: transparent;
        border: none;
        font-size: 200%;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 100px;
        outline: none;
    }
    .score-team {
        font-size: 150%;
        background-color: transparent;
        border: none;
        font-family: 'H', 'Trebuchet MS', Helvetica;
        text-align: center;
        font-weight: 100;
    }
    .referee-input-score-bg {
        background-color: white;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px 0px rgba(196, 196, 196, 0.75);
    }
}

@media only screen and (min-width: 900px) {
    .mobile-score-input {
        background-color: transparent;
        border: none;
        font-size: 200%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100px;
        outline: none;
    }
    .mobile-score {
        justify-content: center;
        display: flex;
    }
    .referee-input-score-bg {
        background-color: white;
        width: 100px;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px 0px rgba(196, 196, 196, 0.75);
    }
    .score-team {
        font-size: 150%;
        background-color: transparent;
        border: none;
        font-family: 'H', 'Trebuchet MS', Helvetica;
        font-weight: 100;
    }
}
`;

export default GlobalStyle;