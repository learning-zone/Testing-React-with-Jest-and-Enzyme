import React from 'react'
import Header from './Component/Header/Header'
import Headline from './Component/Headline/Headline'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render the posts!" />
      </section>
    </div>
  );
}

export default App;
