import React from 'react';

export default function ({ user }) {
  console.log(user);
  return (
    <div id="bio">
      <img src={user.avatar_url} alt="avatar" />
      <h3>{user.name}</h3>
      <p>{user.login}</p>
      <a href={`${user.html_url}?tab=repositories`}><button>Go to github</button></a>
      <p>{user.followers} followers | {user.following} following</p>
      <p>{user.location}</p>
      <a href={user.blog}><p>{user.blog}</p></a>
    </div>
  )
}