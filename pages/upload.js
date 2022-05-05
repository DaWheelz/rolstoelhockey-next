import { display } from '@mui/system';
import React, { Component, View, useState} from 'react';
import * as XLSX from "xlsx";

const { Parser } = require('json2csv');

  function Upload(){
    const [gamedays, setGameDay] = useState([]);
    const [matches, setMatches] = useState([]);
    const [filedownloadlink, setFiledownloadlink] = useState("");

  const readGamedayExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", cellDates: true });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws, {raw: false});
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setGameDay(d);
    });
  };

  const readMatchExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", cellDates: true });

        const wsname = wb.SheetNames[1];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws, {raw: false});
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setMatches(d);
    });
  };

  const uploadGamedays = async () => {
    try {
        const data = await Promise.all(
            gamedays.map(async (gameday) => {
                const response = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/add', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({title: gameday.title, gamedate: gameday.gamedate, gamedayid: gameday.gamedayid, city: gameday.city, address: gameday.address, competitionid: gameday.competitionid})
                     });

                     return await response.json();
            })
        )
      // enter you logic when the fetch is successful
         console.log(data);
       } catch(error) {
     // enter your logic for when there is an error (ex. error toast)

          console.log(error)
         } 
    }

    const uploadMatches = async () => {
        try {
            const data = await Promise.all(
                matches.map(async (match) => {
                    const response = await fetch('https://rolstoelhockey-backend.herokuapp.com/matches/add', {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json'
                           },
                           body: JSON.stringify({teamA: match.teamA, scoreA: 0, scoreB: 0, teamB: match.teamB, gamedayid: match.gamedayid, played_at: match.playedAt, competitionid: match.competitionid})
                    });
    
                         return await response.json();
                })
            )
          // enter you logic when the fetch is successful
             console.log(data);
           } catch(error) {
         // enter your logic for when there is an error (ex. error toast)
    
              console.log(error)
             } 
    }

    const Export = async () => {
        const fields = ['title', '_id'];
        const json2csvParser = new Parser({fields});
        const response = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/get/H')
        const data = await response.json()
        const csv = json2csvParser.parse(data);

        const myURL = window.URL || window.webkitURL

        var blob = new Blob([csv], { type: 'text/csv' });
        var csvUrl = myURL.createObjectURL(blob);
        setFiledownloadlink(csvUrl);
    }

  return (
    <div style={{display:'flex'}}>
        <div>
            <h6>Upload wedstrijd dagen</h6>
            <input
            type="file"
            onChange={(e) => {
            const file = e.target.files[0];
            readGamedayExcel(file);
            }}
         />

        <table className="table container">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Id</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">CompetitionId</th>
            </tr>
            </thead>
            <tbody>
            {gamedays.map((d) => (
                <tr key={d.gamedayid}>
                <th>{d.title}</th>
                <td>{d.gamedate}</td>
                <td>{d.gamedayid}</td>
                <td>{d.city}</td>
                <td>{d.address}</td>
                <td>{d.competitionid}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <button onClick={() => uploadGamedays()}>Upload wedstrijd dagen</button>
        </div>
        <div>
            <h6>Upload wedstrijden</h6>
            <input
            type="file"
            onChange={(e) => {
            const file = e.target.files[0];
            readMatchExcel(file);
            }}
         />

        <table className="table container">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Id</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">CompetitionId</th>
            </tr>
            </thead>
            <tbody>
            {gamedays.map((d) => (
                <tr key={d.gamedayid}>
                <th>{d.title}</th>
                <td>{d.gamedate}</td>
                <td>{d.gamedayid}</td>
                <td>{d.city}</td>
                <td>{d.address}</td>
                <td>{d.competitionid}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <button onClick={() => uploadMatches()}>Upload wedstrijden</button>
        </div>
        <div>
            <button onClick={() => Export()} href={filedownloadlink}>Export Wedstrijd dagen met ID</button>
        </div>
    </div>
  );
};

export default Upload;