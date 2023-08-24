import React from 'react';
import './style.css';
import { useState } from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <button
        id={t.id}
        href={'/read/' + t.id}
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}
      >
        {t.title}
      </button>
    );
  }
  return (
    // <nav>
    //   <ol>{lis}</ol>
    // </nav>
    <p>{lis}</p>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'O', body: 'White Noise' },
    { id: 2, title: 'M', body: 'Natsu' },
    { id: 3, title: 'B', body: 'Cronotasis' },
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web!"></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
