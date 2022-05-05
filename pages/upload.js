import React, { Component, View, useState} from 'react';
import * as XLSX from "xlsx";

function Upload(){
    const [items, setItems] = useState([]);
    const [gamedays, setGameDay] = useState([]);

  const readExcel = (file) => {
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
        console.log("excel data: ", d);
      setGameDay(d);
    });
  };

  const uploadData = async () => {
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

        // const response = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/add', {
        //  method: 'POST',
        //  headers: {
        //    'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify({gameday})
        //  });

      // enter you logic when the fetch is successful
         console.log(data);
       } catch(error) {
     // enter your logic for when there is an error (ex. error toast)

          console.log(error)
         } 
    }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
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

      <button onClick={() => uploadData()}></button>
    </div>
  );
};

export default Upload;