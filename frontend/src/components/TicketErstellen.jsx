import React, { useState } from 'react';

//für styling bootstrap forms https://getbootstrap.com/docs/5.3/forms/form-control/

function createTicket() {
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

    }
    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
            <input  type="text" placeholder="Betreff" name='title' id='title' />
            <textarea  placeholder="Bitte beschreiben Sie hier Ihr Problem" name='description' id='description'/>
                <input type="file" className="form-control-file" onChange={onFileChange} />
                <input type="submit" value="Upload" className="btn btn-default" />
            </div>
        </form>
    );
}


export default createTicket;