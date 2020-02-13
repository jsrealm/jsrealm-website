import React from 'react';
import { Link, Flex, Image, Text } from '@chakra-ui/core';
import './community-partners.css';
import ga from '../../images/ga.png';

function CommunityPartners() {
  return (
    <Flex className="community-partner" justifyContent="center" direction="column">
      <Text fontSize="5xl" textAlign="center">Proud Community Partners</Text>
      <br />
      <Flex justifyContent="center">
        <Link href="https://graphql.asia/" isExternal>
          <Image height="300px" src={ga} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default CommunityPartners;
