import React from 'react';


export default function() {
  return (
    <main>
      <section>
        <p>
          &emsp;This page is built with React and is using react-router-dom.
          Because this page is hosted on GitHub Pages, there is no server side routing to
          resolve routed paths. The solution is to use <em>404.html</em> to encode path into params
          and then decode it into a valid route with <em>index.html</em> once the bundle.js is loaded.
          All links to this page would resolve correctly and the page can be loaded from any path.
          Special thanks to <a href='https://github.com/rafrex/' target='_blank'>Rafael Pedicini</a> for
          figuring out a solution.
        </p>
        <p>
          &emsp;The icons were drawn in Photoshop (visible on mobile and window width less than 810 pixels).
          Becaue IE doesn't properly support "filter" in CSS, I had to use two sets of images, one
          for each color.
        </p>
        <p>
          &emsp;In light of recent advancements in hacking phone systems and numbers switching, if you
          chose to contact me by phone, and I don't know your number, please leave a message.
        </p>
      </section>
    </main>
  );
}
