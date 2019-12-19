import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/core';
import './intro.css';
  
const regUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeAn_1HPvYtw_-q6gfDJdtXoGtK66KNcXfIFBcAugHQ7JiW1g/viewform?usp=send_form`;

function Intro() {
  return (
    <Flex
      alignItems="center" 
      className="intro"
      direction="column"
      justifyContent="center"
    >
      <div>
        <Text fontSize="5xl" textAlign="center">Welcome to JsRealm</Text>
        <Text fontSize="18px" className="description" textAlign="center">
        We are a bunch of JavaScript / GraphQL enthusiasts, who is very active in the community. In India, there is a strong community of JS devs, but its concentration is in specific regions. There are many instances where people had to travel to Bangalore / Delhi NCR for Meetups & Conferences. And people who can't travel find it very hard to keep themselves update in trends, learn new techniques and learning technologies. We identified a problem here and attempting to solve the issue through JSRealm
        </Text>
      </div>
      <Button onClick={() => window.open(regUrl)} mt="5" variantColor="white" variant={"outline"}>Register Now</Button>
    </Flex>
  );
}

export default Intro;
