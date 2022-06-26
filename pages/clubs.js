import React, { Component } from 'react'
import axios from 'axios';
import GoogleAd from './components/GoogleAd';

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
        },
        revalidate:60
    }
}

function Club ({clubsH, clubsE}){
    return (
        <div className="min-h-screen p-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                <div style={{width:'15rem', maxHeight:'10rem'}}>
                    <GoogleAd slot="4495490030" googleAdId="ca-pub-3103181417222460"/>
                </div>
                    <table className="min-w-full">
                    <tbody>
                        <td className="py-4 whitespace-nowrap font-medium text-lg underline decoration-orange-600">Teams - H</td>
                            {clubsH.map((club) => {
                            return (
                                <tr className="border-b" key={club._id}>
                                    <td className="text-md px-6 py-4 whitespace-nowrap">{club.clubname}</td>
                                    <td className="text-md px-6 py-4 whitespace-nowrap">{club.address}</td>
                                    <a href={club.website}><td className="text-md py-4 whitespace-nowrap">Website</td></a>
                                </tr>
                            )})}
                            <td className="py-4 whitespace-nowrap font-medium text-lg underline decoration-orange-600">Teams - E</td>
                            {clubsE.map((club) => {
                            return (
                                <tr className="border-b" key={club._id}>
                                    <td className="text-md px-6 py-4 whitespace-nowrap">{club.clubname}</td>
                                    <td className="text-md px-6 py-4 whitespace-nowrap">{club.address}</td>
                                    <a href={club.website}><td className="text-md py-4 whitespace-nowrap">Website</td></a>
                                </tr>
                            )})}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Club;
