import React from 'react';
import './team-member.scss';
import { Flex } from '@chakra-ui/core';

export default function TeamMember({ name, avatar, twitter }) {
  return (
    <div className="container">
      <div className={"card"}>
        <Flex justifyContent="center">
          <img alt={`${name}'s avatar`} src={avatar} />
        </Flex>
        <h3 className={"text-center white-color"}>{name}</h3>
        <a className={"text-center"} target="__blank" href={`https://twitter.com/${twitter}`}>
          {`@${twitter}`}
        </a>
      </div>
    </div>
  );
}