import React from 'react';
import experience from './experience';
import ExperienceItemView from './ExperienceItemView';


export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
      <section className='experience'>
        <ul className='type'>
          {
            experience.map(item => {
              return (
                <li className='type'>
                  <div className='sticky'><h2>{'experience: ' + item.category}</h2></div>
                  <ul className='list'>
                      {item.list.map(sub => <ExperienceItemView item={sub} />)}
                  </ul>
                </li>
              )
            })
          }
        </ul>
        </section>
      </main>
    )
  }
}
