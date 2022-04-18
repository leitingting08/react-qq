import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import { imgList } from './config';

function App() {
  return <div className="App"><Carousel imgList={imgList} /></div>;
}

export default App;
