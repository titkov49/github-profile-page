import React, { useState, useEffect } from 'react';
import Repository from './Repository';
import Input from '../../Input';

export default function ({ repos }) {
  const [reposName, setReposName] = useState('');
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    if (!reposName) setRepositories(null);
    else {
      setRepositories(repos.filter(item => item.name.includes(reposName)));
      console.log('AFTER: ', repositories);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reposName]);

  useEffect(() => {
    setReposName('');
  }, [repos]);

  return (
    <div id="repositories">
      <Input setValue={setReposName} autoloading/>
      <ul>
        {(repositories || repos).map(item => <Repository item={item} key={item.node_id}/>)}
      </ul>
    </div>
  )
}