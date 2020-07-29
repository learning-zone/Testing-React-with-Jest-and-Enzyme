import React from 'react'
import Header from './Component/Header/Header'
import Props from './Component/Props/Props'
import Event from './Component/Event/Event'
import './App.scss'

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
        <Props header="Props" desc="Validating props in React !" />
        <hr/>
        <Event />
      </section>
    </div>
  );
}

export default App;
