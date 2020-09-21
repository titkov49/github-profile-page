import React from 'react';
import { getDate, getColor } from '../../../utils';

export default function ({ item }) {

  return (
    <li>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <div className="additional-rep-info">
        {item.language && 
          <div className="language">
            <span className={`language-circle ${getColor(item.language)}`}></span>
            <span>{item.language}</span>
          </div>
        }
        {item.forkes && <span>{item.forkes}</span>}
        {item.license && <span>{item.license.name}</span>}
        <span>Updated on {getDate(item.updated_at)}</span>
      </div>
    </li>
  );
}