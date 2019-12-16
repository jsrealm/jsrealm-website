import React from 'react';
import './eventFormat.scss';
const EventFormat = () => {
  return (
    <div className="format-container">
      <h2 className="css-18m2xie"> Format </h2>
      <h3>There are two different formats of events</h3>
      <div className="event-description">
        <h3 className="css-7sgb7i">CHISEL - TALKS</h3>
        <p className="css-v5ivh2">
          A set of 2 or 3 Technical Talks, wherein there will be technical talks
          about advanced topics. This focuses more on Experienced people who
          would love to stay updated or learn about use cases how people solved
          complex Real-world problems. Beginners who are interested can also
          attend these events.
        </p>
        <p>
          Add-on: 30 minutes session for people who want to be a Tech Speaker.
          No specific Agenda for 30 minutes and only for interested people who
          stay back
        </p>
      </div>
      <div className="event-description">
        <h3>MOULD - CODELABS:</h3>
        <p>
          It will be a 2-3 hours session, wherein, we take a particular
          technology or tool and go in-depth. It's more of a hands-on
          session/training where the attendees will go back home with a
          successful project in their Github. It will be more beginner-friendly
          and Beginners & Experienced people who want to learn new stuff are the
          target audience here.
        </p>
        <p>
          Add-on: 30 minutes session for people who want to contribute to
          Open-source. No specific Agenda for 30 minutes and only for interested
          people who stay back.
        </p>
      </div>
    </div>
  );
};

export default EventFormat;
