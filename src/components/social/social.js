import React from 'react';
import { Link, Flex, Text } from '@chakra-ui/core';
import './social.css';

function Social() {
  return (
    <Flex className="social" justifyContent="center">
      <div style={{"text-align": "center"}}>
        <Text fontSize="4xl">Get in touch</Text>
        <Link href="https://github.com/jsrealm">
          <i class="fa fa-github"></i> GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/jsrealm-community-96731b197/">
          <i class="fa fa-linkedin-square"></i> LinkedIn
        </Link>
        <Link href="https://twitter.com/js_realm">
          <i class="fa fa-twitter"></i> Twitter
        </Link>
        <Link href="mailto:jsrealmcommunity@gmail.com">
          <i class="fa fa-google"></i> Mail
        </Link>
      </div>
    </Flex>
  );
}

export default Social;
