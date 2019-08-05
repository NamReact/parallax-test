import React from "react";
import RegularWrapper from "./components/RegularWrapper";
import ParallaxWrapper from "./components/ParallaxWrapper";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="App">
      <NavBar />
      <ParallaxWrapper id="parallax-1">
        <div className="content">{lorem}</div>
      </ParallaxWrapper>
      <RegularWrapper>
        <div className="content">{lorem}</div>
      </RegularWrapper>
      <ParallaxWrapper id="parallax-2">
        <div className="content">{lorem}</div>
      </ParallaxWrapper>
      <RegularWrapper>
        <div className="content">{lorem}</div>
      </RegularWrapper>
      <ParallaxWrapper id="parallax-1">
        <div className="content">{lorem}</div>
      </ParallaxWrapper>
      <RegularWrapper>
        <div className="content">{lorem}</div>
      </RegularWrapper>
    </div>
  );
};

export default App;
