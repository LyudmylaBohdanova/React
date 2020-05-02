import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header/>
        <Main />
        <Footer/>
      </React.StrictMode>
    </div>
  );
}

export default App;
