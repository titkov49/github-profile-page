import React, { useState, useEffect, useRef } from 'react';
import Repository from './Repository';
import Button from './Button';
import { scrollToRef } from '../../utils';

export default function ({ user }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const repositoriesRef = useRef(null);

  const pagesNum = Math.ceil(user.public_repos / 10)
  const isFirstPage = () => page === 1;
  const isLastPage = () => page === pagesNum;

  const onPrevPage = () => {
    if (isFirstPage()) return;
    setPage(prev => prev - 1);
    scrollToRef(repositoriesRef);
  };

  const onNextPage = () => {
    if (isLastPage()) return;
    setPage(prev => prev + 1);
    scrollToRef(repositoriesRef);
  };

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
      {pagesNum > 1 && repos.length > 0 &&
        <div className="buttons-container">
          <Button
            onClick={onPrevPage}
            className={isFirstPage() ? 'disabled' : 'active'}
            label="Prev"
          />
          <Button
            onClick={onNextPage}
            className={isLastPage() ? 'disabled' : 'active'}
            label="Next"
          />
        </div>
      }
    </div>
  )
}