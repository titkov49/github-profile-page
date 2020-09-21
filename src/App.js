import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input';
import Profile from './components/Profile';
import './App.scss';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!username) return;
    axios.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos?per_page=50`)
    ])
    .then(([user, repos]) => setProfile({
      user: user.data,
      repos: repos.data
    }));
  }, [username]);

  useEffect(()=>{
    if(!profile) return;
    console.log("PROFILE", profile)
  }, [profile])

  return (
    <div className="App">
      <Input setValue={setUsername}/>
      {profile && <Profile profile={profile}/>}
    </div>
  );
}

export default App;
