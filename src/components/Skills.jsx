import React from 'react';
import skills from './skills'


export default function() {
  return (
    <main>
      <section className='skills'>
        <ul className='type'>
          {
            skills.map((item, i) => {
              return (
                <li className='type' key={item.type + i}>
                  <h4>
                    {item.type}
                  </h4>
                  <ul className='horizontal'>
                    {
                      item.list.map((detail, i, arr) => (
                        <li key={detail}>
                          {detail}
                        </li>
                      ))
                    }
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
