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
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                    <tbody>
                        <td className="px-6 py-4 whitespace-nowrap text-large font-medium text-gray-900">Teams - H</td>
                            {clubsH.map((club) => {
                            return (
                                <tr className="border-b" key={club._id}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{club.clubname}</td>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{club.address}</td>
                                    <a href={club.website}><td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">Website</td></a>
                                </tr>
                            )})}
                            <td className="px-6 py-4 whitespace-nowrap text-large font-medium text-gray-900">Teams - E</td>
                            {clubsE.map((club) => {
                            return (
                                <tr className="border-b" key={club._id}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{club.clubname}</td>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{club.address}</td>
                                    <a href={club.website}><td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">Website</td></a>
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
