import React from 'react'
import {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';

function App(){
  const boardData = {
    active:
  }
  const [allboard,setAllBoard] = useState(null);

  return (
    <>
   <Header></Header>
   <BoardContext.Provider value={{allboard,setAllBoard}}>
<div className='content flex'>
<Sidebar></Sidebar>
<Main></Main>
   </div>
   </BoardContext.Provider>
   

    </>
  )
}
export default App