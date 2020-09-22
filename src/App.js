import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Bio from './components/Bio';
import Repositories from './components/Repositories';
import './App.scss';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [username]);

  useEffect(()=>{
    if(!user) return;
    console.log("App.js PROFILE", user)
  }, [user])

  return (
    <div className="App">
      <Input setValue={setUsername} placeholder="Type username" />
      {user &&
        <div id="profile">
          <Bio user={user} />
          <Repositories user={user} />
        </div>
      }
    </div>
  );
}

export default App;
