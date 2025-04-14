import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Clients from "./components/Clients.jsx";
import Community from "./components/Community.jsx";
import Pixelgrade from "./components/Pixelgrade.jsx";
import Stats from "./components/Stats.jsx";
import How from "./components/How.jsx";
import Meet from "./components/Meet.jsx";
import Article from "./components/Article.jsx";
import Demo from "./components/Demo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Community />
      <Pixelgrade />
      <Stats />
      <How />
      <Meet />
      <Article />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
