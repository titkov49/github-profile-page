import React, { useState, useEffect, useRef } from 'react';
import Repository from './Repository';
// import Button from './Button';
import { scrollToRef } from '../../utils';

export default function ({ user }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const repositoriesRef = useRef(null);

  const pagesNum = Math.ceil(user.public_repos / 10)
  const isFirstPage = () => page === 1;
  const isLastPage = () => page === pagesNum;

  const onPage = (arg) => {
    if ((isFirstPage() && arg === -1) || (isLastPage() && arg === 1)) return;
    setPage(prev => prev + arg);
    scrollToRef(repositoriesRef);
  };

  // const onNextPage = () => {
  //   if (isLastPage()) return;
  //   setPage(prev => prev + 1);
  //   scrollToRef(repositoriesRef);
  // };

  useEffect(() => {
    fetch(`https://api.github.com/users/${user.login}/repos?page=${page}&per_page=10`)
     .then(res => res.json())
     .then(data => setRepos(data))
  }, [user, page]);

  return (
    <div id="repositories" ref={repositoriesRef}>
      <h1>{user.public_repos} public repositories</h1>
      <ul>
        {repos.map(item => <Repository item={item} key={item.node_id}/>)}
      </ul>
      {pagesNum > 1 &&
        <div className="buttons-container">
          <button
            onClick={() => onPage(-1)}
            className={isFirstPage() ? 'disabled' : 'active'}
          >
            Prev
          </button>
          <button
            onClick={() => onPage(1)}
            className={isLastPage() ? 'disabled' : 'active'}
          >
            Next
          </button>
        </div>
      }
    </div>
  )
}