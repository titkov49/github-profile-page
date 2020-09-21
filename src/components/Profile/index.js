import React from 'react';
import Bio from './Bio';
import Repositories from './Repositories';

export default function ({ profile }) {
  return (
    <div id="profile">
      <Bio user={profile.user} />
      <Repositories repos={profile.repos} />
    </div>
  )
}