import React from 'react';
import Header from './components/Header'
import Title from './components/Title'
import CalenderNav from './components/CalenderNav'
import SideBar from './components/SideBar'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <CalenderNav />
      <SideBar />
    </div>
  );
}

export default App;
