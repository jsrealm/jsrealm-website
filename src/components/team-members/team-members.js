import React from "react";
import TeamMember from "../team-member/team-member";
import { TEAM_MEMBERS } from "../../data/team-members";
import "./team-members.scss";

export default function TeamMembers() {
  return (
    <div className={"team-members-container"}>
      <div className="team-members">
        {TEAM_MEMBERS.map(teamMember => {
          const { name, avatar, twitter } = teamMember;

          return (
            <TeamMember
              key={twitter}
              name={name}
              avatar={avatar}
              twitter={twitter}
            />
          );
        })}
      </div>
    </div>
  );
}
