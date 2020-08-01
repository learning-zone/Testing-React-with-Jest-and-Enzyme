import React from 'react'
import Header from './Components/Header/Header'
import Props from './Components/Props/Props'
import Events from './Components/Events/Events'
import RestAPI from './Components/RestAPI/RestAPI'
import './App.scss'

function App() {
  return (
    <div className='App' data-test='AppComponent'>
      <Header />
      <section className='main'>
        <Props header='Props Test' desc='Validating props in React !' />
        <br/><hr/>
        <Events />
        <br/><hr/>
        <RestAPI />
      </section>
    </div>
  );
}

export default App;
