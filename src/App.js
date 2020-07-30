import React from 'react'
import Header from './Component/Header/Header'
import Props from './Component/Props/Props'
import Events from './Component/Events/Events'
import RestAPI from './Component/RestAPI/RestAPI'
import './App.scss'

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
        <Props header="Props Test" desc="Validating props in React !" />
        <br/><hr/>
        <Events />
        <br/><hr/>
        <RestAPI />
      </section>
    </div>
  );
}

export default App;
