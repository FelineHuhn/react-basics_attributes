import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My little Wiki</h2>
      <label htmlFor="question">Today`s Question:</label>
      <input id="question"></input>
      <a className="article__link" href="www.wikipedia.com">
        WIkipedia
      </a>
    </article>
  );
}
