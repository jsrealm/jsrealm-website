import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import './process.css';

const Process = () => {
  return (
    <Flex 
      className="process" 
      justifyContent="center" 
      alignItems="center"
    >
      <div>
        <Text textAlign="center" fontSize="5xl">Process</Text>
        <ol>
          <li>
            Register as a Member(it is lifetime free), by filling this form
          </li>
          <li>
            Unlike other open Meetups, it is a Limited Seat Event. So
            first-register, first-serve for all events
          </li>
          <li>
            Share the news across. We have a Referral System.
          </li>
          <li>
            If someone adds your email address as Reference, you get Priority
            seat. That means, we have some seats left for you always.
          </li>
          <li>
            You can use those for any future meet-ups and also by referring you
            get to see many familiar faces like ex-Colleagues in the event.
          </li>
          <Text className="ref" fontSize="2xl">REFERRAL: A surprise awaits for people with 10+ referrals</Text>
        </ol>
      </div>
    </Flex>
  );
};

export default Process;
