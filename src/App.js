import React from 'react'
import Header from './Component/Header/Header'
import Headline from './Component/Headline/Headline'
import './App.scss'

const tempArr = [{
  fName: 'Alex',
  lName: 'K',
  email: 'alexk@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render the posts!" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
