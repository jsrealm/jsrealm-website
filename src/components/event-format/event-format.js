import React from 'react';
import { Text, Flex } from '@chakra-ui/core';
import './event-format.css';

const EventFormat = () => {
  return (
    <Flex 
      className="event-format" 
      alignItems="center" 
      justifyContent="center"
      direction="column"
    >
      <div>
        <Text textAlign="center" fontSize="5xl">Format</Text>
        <Text textAlign="center" fontSize="2xl">There are two different formats of events</Text>
        <Text mt={10} fontSize="4xl">CHISEL - TALKS</Text>
          <div className="event-description">
            <Text fontSize="2xl">
              A set of 2 or 3 Technical Talks, wherein there will be technical talks
              about advanced topics. This focuses more on Experienced people who
              would love to stay updated or learn about use cases how people solved
              complex Real-world problems. Beginners who are interested can also
              attend these events.
            </Text>
            <Text fontSize="2xl">
              Add-on: 30 minutes session for people who want to be a Tech Speaker.
              No specific Agenda for 30 minutes and only for interested people who
              stay back
            </Text>
          </div>
          <Text mt={10} fontSize="4xl">MOULD - CODELABS</Text>
          <div className="event-description">
            <Text fontSize="2xl">
              It will be a 2-3 hours session, wherein, we take a particular
              technology or tool and go in-depth. It's more of a hands-on
              session/training where the attendees will go back home with a
              successful project in their Github. It will be more beginner-friendly
              and Beginners & Experienced people who want to learn new stuff are the
              target audience here.
            </Text>
            <Text fontSize="2xl">
              Add-on: 30 minutes session for people who want to contribute to
              Open-source. No specific Agenda for 30 minutes and only for interested
              people who stay back.
            </Text>
          </div>
      </div>
    </Flex>
  );
};

export default EventFormat;
