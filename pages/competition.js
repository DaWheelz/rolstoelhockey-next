import React, { Component } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'react-confirm-alert/src/react-confirm-alert.css';

var bgColors = {
    "Default": "#81b71a",
    "Button-Color": "#ff7d00"
};

var compDivision = [
    { id: 0, title: "Selecteer een klasse" },
    { id: 1, title: "Hoofdklasse" },
    { id: 2, title: "Overgangsklasse" },
    { id: 3, title: "1e klasse" },
    { id: 4, title: "2e klasse" },
    { id: 5, title: "3e klasse" }
];

class Settings extends Component {
    constructor() {
        super();

        this.state = {
            teamsH: [],
            teamsE: [],
            validationError: "",
            loggedIn: false,
            selectChanged: false,
            compId: 0,
        };
    }

    getTeamsH(compid) {
        this.setState({ compId: compid});
        axios.get(`https://rolstoelhockey-backend.herokuapp.com/clubs/team/` + compid + "/H").then(response => {
            this.setState({ teamsH: response.data });
        });
    }

    getTeamsE(compid) {
        this.setState({ compId: compid});
        axios.get(`https://rolstoelhockey-backend.herokuapp.com/clubs/team/` + compid + "/E").then(response => {
            this.setState({ teamsE: response.data });
        });
    }
    render() {
        return (
            <div class="p-7">
                <select class="form-select appearance-none block w-full px-3 py-1.5 my-3 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={this.state.compId} onChange={(e) => { this.getTeamsH(e.target.value); this.getTeamsE(e.target.value); }}>
                    {compDivision.map(comp => (
                        <option
                            key={comp.id}
                            value={comp.id}>
                            {comp.title}
                        </option>
                    ))}
                </select>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th>Naam</th>
                                    <th class="px-4">GS</th>
                                    <th class="px-4">GW</th>
                                    <th class="px-4">GL</th>
                                    <th class="px-4">VL</th>
                                    <th class="px-4">PT</th>
                                    <th class="px-4">V</th>
                                    <th class="px-4">T</th>
                                    <th class="px-4">DS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td class="whitespace-nowrap text-large font-medium text-slate-900">Competitie - H</td>
                                {this.state.teamsH.map(team => (
                                    <tr key={team._id}>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.teamname}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GS}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GW}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GL}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.VL}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.PT}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.V}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.T}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.DS}</td>
                                    </tr>
                                ))}
                                    <td class="whitespace-nowrap text-large font-medium text-slate-900">Competitie - E</td>
                                    {this.state.teamsE.map(team => (
                                    <tr key={team._id}>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.teamname}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GS}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GW}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.GL}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.VL}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.PT}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.V}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.T}</td>
                                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap">{team.DS}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
        </div >
        );
    }
}

export default Settings;
