import React, { Component, View, useState} from 'react';
import * as XLSX from "xlsx";

function Upload(){
    const [items, setItems] = useState([]);
    const [gameday, setGameDay] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", cellDates: true });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        console.log(ws);

        const data = XLSX.utils.sheet_to_json(ws, {raw: false});
        console.log(data);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setGameDay(...gameday, d);
    });
  };

  const uploadData = async () => {
    try {
        const response = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/add', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({gameday})
         });

       const data = await response.json();
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
          {gameday.map((d) => (
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