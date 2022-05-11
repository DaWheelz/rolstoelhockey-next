import React, { Component } from "react";
import axios from "axios";
import GlobalStyle from './components/styled_components';

const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

class Match extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      gamedays: [],
      selectedGameDay: "",
      validationError: "",
      loggedIn: false,
      selectChanged: false,
      role: '',
    };
  }
  
  UNSAFE_componentWillMount() {
    this.getGameDays();
  };

  getMatches(gamedayid) {
    axios.get(`https://rolstoelhockey-backend.herokuapp.com/matches/find/` + gamedayid).then(response => {
      this.setState({ matches: response.data });
    });
  }

  getGameDays() {
    fetch("https://rolstoelhockey-backend.herokuapp.com/gamedays/get/H").then(response => {
      return response.json();
    })
      .then(data => {
        let gamedaysFromApi = data.map(gameday => {
          let game_date = new Date(gameday.gamedate).toLocaleDateString('nl-NL', options);
          return { value: gameday._id, display: gameday.title + " " + game_date};
        });
        this.setState({
          gamedays: [
            {
              value: 1,
              display:
                "H-Hockey",
              style : {
                fontWeight: '600',
                color: 'rgb(234 88 12)'
              }
            }
          ].concat(gamedaysFromApi)
        });
        fetch("https://rolstoelhockey-backend.herokuapp.com/gamedays/get/E").then(response => {
      return response.json();
      })
      .then(data => {
        let gamedaysFromApi = data.map(gameday => {
          let game_date = new Date(gameday.gamedate).toLocaleDateString('nl-NL', options);
          return { value: gameday._id, display: gameday.title + " " + game_date };
        });
        this.setState({
          gamedays: [ ...this.state.gamedays,
            {
              value: 2,
              display:
                "E-Hockey",
              style : {
                fontWeight: '600',
                color: 'rgb(234 88 12)'
              }
            }
          ].concat(gamedaysFromApi)
        });
      })
      });
  }

  render() {
    const matchItems = this.state.matches.map((match, _id) => {
        return (
          <div className="match-group" key={_id}>
            <div className="match-time ">{match.played_at}</div>
            <div className="match-teama">{match.teamA}</div>
            <div className="match-score text-orange-600">{match.scoreA}</div>
            <div className="match-score"> : </div>
            <div className="match-score text-orange-600">{match.scoreB}</div>
            <div className="match-teamb">{match.teamB}</div>
          </div>
        );
      });

    return (
      <div style={{ border: '1px solid #dadada',backgroundColor: 'white', borderRadius: '.1875rem', boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)' }} className="p-7">
        <GlobalStyle />
        <div>
          <h4 style={{ width: '20%', fontWeight: '600' }}>Alle wedstrijden</h4>
          <div style={{ display: 'flex' }}>
            <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={this.state.selectedGameDay} onChange={(e) => { this.getMatches(e.target.value); this.setState({ selectChanged: true, selectedGameDay: e.target.value }); }}>
              {this.state.gamedays.map(gameday => (
                <option
                  key={gameday.value}
                  value={gameday.value}
                  style={gameday.style}
                >
                  {gameday.display}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ color: "red", marginTop: "5px" }}>
          {this.state.validationError}
        </div>
        <div>
          {matchItems}
        </div>
      </div >
    );
  }
}

export default Match;
