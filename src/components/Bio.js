import React from 'react';

export default function ({ user }) {
  return (
    <div id="bio">
      <div className="main-info">
        <img src={user.avatar_url} alt="avatar" />
        <div className="names">
          <h1>{user.name}</h1>
          <p>{user.login}</p>
        </div>
      </div>
      <p>{user.bio}</p>
      <a href={`${user.html_url}?tab=repositories`}><button>Go to github</button></a>
      <p>{user.followers} followers | {user.following} following</p>
      <p>{user.location}</p>
      <a href={user.blog}><p>{user.blog}</p></a>
    </div>
  )
}