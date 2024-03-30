import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function createTicket() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token')); 

const formdata = new FormData();
formdata.append('uploaded_file', file);
formdata.append("title", document.getElementById('title').value);
formdata.append("description", document.getElementById('description').value);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8080/ticket/create", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  alert(data.message);

        setTimeout(() => {
            navigate(`/TicketView`);
        }, 3000);
        

    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '-100px' }}>
          <form onSubmit={onFormSubmit} className="col-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Problem</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Beschreibung</label>
              <textarea className="form-control" id="description" placeholder="Bitte beschreiben Sie hier Ihr Problem" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">Datei</label>
              <input type="file" className="form-control" id="file" onChange={onFileChange} />
            </div>
            <button type="submit" className="btn btn-dark">Senden</button>
          </form>
        </div>
      );
    };


export default createTicket;