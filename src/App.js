import React from 'react'
import Header from './Component/Header/Header'
import Props from './Component/Props/Props'
import Event from './Component/Event/Event'
import API from './Component/API/API'
import './App.scss'

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
        <Props header="Props" desc="Validating props in React !" />
        <br/><hr/>
        <Event />
        <br/><hr/>
        <API />
      </section>
    </div>
  );
}

export default App;
