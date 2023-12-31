import React, { useState, createContext } from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/Main-page/main-page";
import Footer from "./components/footer/Footer";

import "./index.scss";

export const Context = createContext();

function App() {

  const [lenghtTasks, setLenghtTasks] = useState('');

  return (
    <Context.Provider value={{lenghtTasks,setLenghtTasks}}>
    <Header/>
      <MainPage/>
    <Footer/>
    </Context.Provider>
  );
}

export default App;
