import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

//I need a list of shop upgrades for the user to buy

//I need two global variables: one to store the cookie counter, one to store the cookies per second

// stretch goal, fetch API upgrades, maybe make my own API?

const upgrades = [{}, {}];

export default function App() {
  const [biscuits, setBiscuits] = useState(0);
  const [biscuitsPerSecond, setBiscuitsPerSecond] = useState(1);

  //I need a timer to track the biscuits, keeping an eye on the bps

  useEffect(() => {
    const biscuitInterval = setInterval(() => {}, 1000);
  }, []);

  return (
    <>
      <h1>Main App</h1>
    </>
  );
}
