import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <section className='home'>
          <img src='/static/bender.gif' alt='Bender with a bowtie' height='200' width='266'/>
          <h2>Welcome! I'm Alexei.</h2>
          <p>
            &emsp;I am a software engineer with main focus on React / Redux and Django / Python,
            and with experience in Node and embedded C.
            I enjoy challanging problems and always
            on look out for new tools and methods that would help me find solutions.
            I strive to understand connections and flow for I believe that those
            are key to managing complexity.
          </p>
          <p>
            &emsp;I love to develop with a team and always redy to support the best idea.
            I love to work in an open and friendly environment where ideas can grow into great results.
            I explore because I love to learn, but I also enjoy sharing my discoveries and
            knowledge with my teammates. We fuel each others growth, but plainly its a lot more fun to
            work together.
          </p>
          <p>
            &emsp;I care deeply about products I create, and enjoy refining details, but
            in the time of need, I switch to <strong>get-it-done</strong> attitude, and
            focus on the essential. When creativity runs low, I go camping with my friends,
            or just shoot a bow in a park. Taking apart an old printer would always lift my spirit.
          </p>
        </section>
      </main>
    );
  }
}
