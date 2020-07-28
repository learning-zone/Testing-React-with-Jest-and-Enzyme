import React from 'react'
import Header from './Component/Header/Header'
import Headline from './Component/Headline/Headline'
import './App.scss'

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
        <Headline header="propTypes" desc="Validating props in React !" />
        <hr/>
      </section>
    </div>
  );
}

export default App;
