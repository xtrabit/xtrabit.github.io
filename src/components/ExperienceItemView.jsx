import React from 'react';


const breakStr = (str) => (
  str.split('-').map((elem, i, arr) => {
    if (!i) {
      return <nobr>{elem.trim() + (arr.length > 1 ? ' -' : '')}</nobr>;
    } else {
      return <span> <nobr>{elem}</nobr></span>;
    }
  })
);


export default function({ item }) {
  return (
        <li>
        <header>
          <h3>
            {breakStr(item.company)}
          </h3>
          <time>
            {breakStr(item.timeframe)}
          </time>
        </header>
        <h4 className='job-title'><em>{item.title}</em></h4>
        <ul className='details'>
          {
            item.details.map(detail => {
              return (
                <li>
                  {detail}
                </li>
              );
            })
          }
        </ul>
        </li>
  );
}
