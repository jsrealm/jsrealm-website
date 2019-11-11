import React from 'react';
import './team-member.scss';

export default function TeamMember({ name, avatar, twitter }) {
  return (
    <div className="container">
      <div className={"card"}>
        <div className="text-center"><img alt={`${name}'s avatar`} src={avatar} /></div>
        <h3 className={"text-center"}>{name}</h3>
        <a className={"text-center"} target="__blank" href={`https://twitter.com/${twitter}`}>
          {`@${twitter}`}
        </a>
      </div>
    </div>
  );
}