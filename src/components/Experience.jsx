import React from 'react';
import experience from './experience.js';
import ExperienceItemView from './ExperienceItemView.jsx';


export default function() {
  return (
    <main>
      <section className='experience'>
        <ul className='type'>
          {
            experience.map((item, i) => {
              return (
                <li className='type' key={item.category + i}>
                  <div className='sticky'><h2>{'experience: ' + item.category}</h2></div>
                  <ul className='list'>
                    {item.list.map(sub => <ExperienceItemView item={sub} key={sub.timeframe} />)}
                  </ul>
                </li>
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}
