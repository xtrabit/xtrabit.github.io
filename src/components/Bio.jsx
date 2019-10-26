import React from 'react';


export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <section classNsme='bio'>
          <h3>Cliffnotes</h3>
          <p>
            &emsp;I am aware of the difficultly employers face in finding talented candidates
            to fill open positions. I was on the other side of the isle on many occasions, and
            this section is my attemp to enhance reader's understanding of who I am.
          </p>
          <p>
            &emsp;As long as I remember, I always liked making things. My first love was
            electricity. I completed my first circuit at four, and found out that
            human body is conductive. Cranes, cars and other things with motors and
            mooving parts were a part of my daily routine. Started to rebuild engines when I
            was old enough, and once converted a diesel Mercedes to run on vegetable
            oil. I love to work on complex machines, and when I realized that the
            most complex machine within my reach is an airplane, I joined the Navy.
          </p>
          <p>
            &emsp;I also love painting, drawing and sculpture, and have an admiration for Michelangelo.
            This admiration drove me to get an architecture degree, but that did not turn out
            to be what I wanted. As I like to be hands on, I stuck around construction
            industry and learned everything I could. Steam bending wood, welding, and
            CNC machining to name a few. When I had to manage others, I learned that
            there is much fun to be had in solving logistical proplems.
          </p>
          <p>
            &emsp;I never lost the draw towards electricity, and at some point decided to
            understand it. I ate and slept with books. Sidetracked, I printed and bound my own
            books because it was difficult to reference PDFs. From electricity to electronics, and then
            I discovered an ocean in embedded processors programming. I stayed away
            from premade boards and kits. Calculating loads, heat gains, and routing component
            connections is a thrill for me. As I etched boards and soldered components, I could not
            restrain myself from driving designs smaller and smaller untill I could no longer work
            without 5X magnifying glass.
          </p>
          <p>
            &emsp;Hardware design is captivating, but all the magic happens in software.
            Writing programs after work for days and then watching the first pulse stream on scope,
            or sending the first message over UART is like a virgin jump with a parachute.
            It's alive! My draw towards electricity grew into something bigger, and while on the crest
            of that passion, I sought and found a way into the vast world of software engineering
            through web development.
          </p>
          <p>
            &emsp;I would not claim to be talented, and like all humans, have my shortcumings. I like
            to get sidetracked, and enjoy personal projects because they lack time pressure, apart from
            the one I set for myself. I like to get lost in details and then find myself again in them.
            Despite my experience, I still get afraid when appointed lead on a project that is new
            for me and with a price tag of hundreds of thousands of dollars. I don't like to be pushed,
            for fear of dropping something from my attention, but I always have been a self-starter and
            constantly push myself to be better. I do know though, that my understanding of systems and
            processes across many disciplines makes me a good debugger.
          </p>
          <p>
            P.S. I am still in regular contact with all of my previous employers.
          </p>
        </section>
      </main>
    )
  }
}
