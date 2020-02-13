import React from 'react';
import Intro from '../../components/intro';
import EventFormat from '../../components/event-format';
import Process from '../../components/process';
import TeamMembers from '../../components/team-members';
import Social from '../../components/social';
import CommunityPartners from '../../components/community-partners/community-partners';

function App() {
  return (
    <>
      <Intro />
      <EventFormat />
      <Process />
      <TeamMembers />
      <CommunityPartners />
      <Social />
    </>
  );
}

export default App;
