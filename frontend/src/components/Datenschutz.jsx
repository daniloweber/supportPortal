import React from 'react';

const Datenschutz = () => {
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

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Datenschutzerklärung</h1>
      <div>
        <strong style={strongStyle}>1. Verantwortliche Stelle</strong>
        HelpDesk GmbH
        <br />
        Adresse: Marienstraße 20, 89518 Heidenheim an der Brenz
        <br />
        E-Mail: kontakt@helpdesk.de
      </div>
      <div>
         <strong style={strongStyle}>2. Disclaimer</strong>
        Die Website ist ein Projekt dual Studierender des Studiengangs Wirtschaftsinformatik der DHBW Heidenheim. 
        <div>Die Website dient ausschließlich zu Übungszwecken und stellt keine reale Firma dar. </div>
      </div>
      <div>
        <strong style={strongStyle}>3. Erhebung und Verarbeitung personenbezogener Daten</strong>
        Wir erheben personenbezogene Daten (z. B. Name, E-Mail-Adresse) nur im Rahmen der Erfüllung unserer vertraglichen Pflichten oder mit Einwilligung der Nutzer.
        <div>Die Datenverarbeitung erfolgt auf Grundlage der DSGVO.</div>
      </div>
      <div>
        <strong style={strongStyle}>4. Zweck der Datenverarbeitung</strong>
        Die erhobenen Daten dienen ausschließlich dem Zweck der Bearbeitung von Kundenanfragen im Ticketsystem.
        <div>Wir verwenden die Daten nicht für andere Zwecke und geben sie nicht an Dritte weiter.</div>
      </div>
      <div>
        <strong style={strongStyle}>5. Speicherdauer</strong>
        Die personenbezogenen Daten werden nur so lange gespeichert, wie es für den genannten Zweck erforderlich ist.
      </div>
      <div>
        <strong style={strongStyle}>6. Rechte der Nutzer</strong>
        Nutzer haben das Recht auf Auskunft, Berichtigung und Löschung ihrer personenbezogenen Daten.
        <div>Bei Fragen zur Verarbeitung der Daten können sich Nutzer an uns wenden.</div>
      </div>
    </div>
  );
};

export default Datenschutz;