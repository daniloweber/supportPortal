import React from 'react';

const Impressum = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '120px 0', 
    textAlign: 'center' 
  };

  const titleStyle = {
    marginBottom: '50px' 
  };

  const strongStyle = {
    fontSize: '1.2em', 
    display: 'block', 
    marginBottom: '10px',
    marginTop: '20px' 
  };

  const nameStyle = {
    marginBottom: '5px' 
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Impressum</h1>
      <div>
        <strong style={strongStyle}>Verantwortliche Stelle:</strong>
        HelpDesk GmbH
        <br />
        Marienstraße 20
        <br />
        89518 Heidenheim an der Brenz
        <br />
        E-Mail: kontakt@helpdesk.de
      </div>
      <div>
        <strong style={strongStyle}>Vertretungsberechtigte Geschäftsführer:</strong>
        <p style={nameStyle}>Danilo Weber,</p>
        <p style={nameStyle}>Adriano Friebel,</p>
        <p style={nameStyle}>Markus Schwarzländer</p>
      </div>
      <div>
        <strong style={strongStyle}>Handelsregister:</strong>
        Amtsgericht Heidenheim, HRB 12345
      </div>
      <div>
        <strong style={strongStyle}>Umsatzsteuer-Identifikationsnummer:</strong>
        DE123456789
      </div>
      <div>
        <strong style={strongStyle}>Disclaimer:</strong>
        Die Website ist ein Projekt dual Studierender des Studiengangs Wirtschaftsinformatik der DHBW Heidenheim. 
        <p>Die Website dient ausschließlich zu Übungszwecken und stellt keine reale Firma dar.</p>
      </div>
    </div>
  );
};

export default Impressum;