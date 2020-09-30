import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Bio from './components/Bio';
import Repositories from './components/Repositories';
import Error from './components/Error';
import './App.scss';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (res.status === 404) throw Error(res.statusText);
        setErr(false)
        return res.json();
      })
      .then(data => setUser(data))
      .catch(e => {
        setErr(true);
        setUser(null);
      });
  }, [username]);

  return (
    <div className="App">
      <Input setValue={setUsername} placeholder="Type username" />
      {err && <Error />}
      {user && !err &&
        <div id="profile">
          <Bio user={user} />
          <Repositories user={user} />
        </div>
      }
    </div>
  );
}

export default App;
