import React from 'react';
import './App.css';
import styled from "styled-components"
import Header from './components/Header'
import Title from './components/Title'
import CalenderNav from './components/CalenderNav'
import SideBar from './components/SideBar'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <div>
      <Header />
      <Title />
      <CalenderNav />

      <MainView>
        <SideBar />
        <MainDisplay />
      </MainView>
    </div>
  );
}

export default App;

const MainView = styled.div`
  display: flex;
`
