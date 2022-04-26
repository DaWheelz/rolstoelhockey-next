import React, { Component } from 'react'
import axios from 'axios';

var textColor = "#1f1f1f";

export async function getStaticProps() {
    const resClubsH = await fetch('https://rolstoelhockey-backend.herokuapp.com/clubs/H')
    const clubsH = await resClubsH.json()

    const resClubsE = await fetch('https://rolstoelhockey-backend.herokuapp.com/clubs/E')
    const clubsE = await resClubsE.json()

    return {
        props: {
            clubsH,
            clubsE
        }
    }
}

function Club ({clubsH, clubsE}){
    return (
        <div style={{ margin: '10px', border: '1px solid #dadada', padding: '20px', backgroundColor: 'white', borderRadius: '.1875rem', boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)'}}>
             <div className='pageblock'>
            <h4 style={{ color: textColor, fontWeight: '600' }}>Clubs - H-hockey</h4>
                     <div className="clubheader">
                         <h4 className="clubnameheader">Naam</h4>
                         <h4 className="clubaddressheader">Adres</h4>
                     </div>
                {clubsH.map((club) => {
                    return (
                        <div className="match-group" key={club._id}>
                            <div className="clubnameinfo">{club.clubname}</div>
                            <div className="clubaddressinfo">{club.address}</div>
                            <a href={club.website}><b className="link">Website</b></a>
                        </div>
                    )})}
        </div>
        <div className='pageblock'>
        <h4 style={{ color: textColor, fontWeight: '600' }}>Clubs - E-hockey</h4>
            {clubsE.map((club) => {
                return (
                    <div className="match-group" key={club._id}>
                        <div className="clubnameinfo">{club.clubname}</div>
                        <div className="clubaddressinfo">{club.address}</div>
                        <a href={club.website}><b className="link">Website</b></a>
                    </div>
                )})}
        </div>
        </div>
    )
}

// class Club extends Component {

//     constructor() {
//         super();
//         this.state = {
//             clubs: [],
//             loggedIn: false
//         }
//     }

//     UNSAFE_componentWillMount() {
//         this.getClubs();
//         // if (localStorage.getItem('token')) {
//         //     this.setState({ loggedIn: true })
//         // }
//     }

//     getClubs() {
//         axios.get('https://rolstoelhockey-backend.herokuapp.com/clubs/H')
//             .then(response => 
//                 this.setState({ clubs: response.data }));
//     }

//     render() {
//         const clubItems = this.state.clubs.map((club, i) => {
//             return (
//                 <div className="match-group" key={club._id}>
//                     <div className="clubnameinfo">{club.clubname}</div>
//                     <div className="clubaddressinfo">{club.address}</div>
//                     <a href={club.website}><b className="link">Website</b></a>
//                 </div>
//             )
//         });
//         return (
//             <div>
//                 <div className="home-div1" style={{border: '1px solid #dadada', padding: '20px', backgroundColor: 'white', borderRadius: '.1875rem', boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)'}}>
//                     <h4 style={{ color: textColor, fontWeight: '600' }}>Clubs</h4>
//                     <div className="clubheader">
//                         <h4 className="clubnameheader">Naam</h4>
//                         <h4 className="clubaddressheader">Adres</h4>
//                     </div>
//                     <div>
//                         {clubItems}
//                     </div>
//                 </div>
//                 <div className="home-div1" style={{border: '1px solid #dadada', padding: '20px', backgroundColor: 'white', borderRadius: '.1875rem', boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)'}}>
//                     <h4 style={{ color: textColor, fontWeight: '600' }}>Clubs</h4>
//                     <div className="clubheader">
//                         <h4 className="clubnameheader">Naam</h4>
//                         <h4 className="clubaddressheader">Adres</h4>
//                     </div>
//                     <div>
//                         {clubItems}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Club;
