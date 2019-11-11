import React from 'react';
import TeamMember from './team-member';
import { TEAM_MEMBERS } from '../data/team-members';
import './team-members.css';

export default function TeamMembers() {
  return (
    <div className={"team-members-container"}>
      <div className="team-members">
        {
          TEAM_MEMBERS.map(teamMember => {
            const { name, avatar, twitter } = teamMember;
        
            return <TeamMember 
                      name={name} 
                      avatar={avatar}
                      twitter={twitter}
                    />;
          })
        }
      </div>
    </div>
  );
}