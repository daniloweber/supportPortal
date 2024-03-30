import React, { useState } from 'react';

function createTicket() {

    const [file, setFile] = useState(null);
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onFormSubmit = async (event) => {
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


    const response = await fetch("http://localhost:8080/ticket/create", requestOptions)
        const data = await response.json();

    alert(data.message);
    const form = document.getElementById('ticketCreationForm');
    form.reset();

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '-100px' }}>
          <form onSubmit={onFormSubmit} className="col-6" id={"ticketCreationForm"}>
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
    }
export default createTicket;