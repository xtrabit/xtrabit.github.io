import React from 'react';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <section className='contact'>
          <dl>
            <dt>name:</dt>
            <dd>Alexei Sorokine</dd>
            <dt>phone:</dt>
            <dd>1 (415) 250-4959</dd>
            <dt>email</dt>
            <dd>2picae@gmail.com</dd>
            <dt>LinkedIn:</dt>
            <dd>
              <a href='https://www.linkedin.com/in/alexei-sorokine/' target="_blank">
                linkedin.com/in/alexei-sorokine/
              </a>
            </dd>
            <dt>GitHub:</dt>
            <dd>
              <a href='https://github.com/xtrabit' target="_blank">
                github.com/xtrabit
              </a>
            </dd>
            <dt>resume</dt>
            <dd>
              <a href="/static/Alexei Sorokine Resume.pdf" target="_blank">
                PDF
              </a>
            </dd>
            <dd>
              <a href="/static/Alexei Sorokine Resume.docx" download>
                MS Word
              </a>
            </dd>
          </dl>
        </section>
      </main>
    )
  }
}
