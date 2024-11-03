import React from 'react'
import './App.css';
import CardList from './components/CardList'
import Header from './components/Header'
import AddComment from './components/AddComments';

function App() {
  return (
    <div className="App">
        <Header/>
        <CardList/>
        <AddComment/>
    </div>
  );
}

export default App;
