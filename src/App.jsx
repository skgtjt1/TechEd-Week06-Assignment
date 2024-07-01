import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Clicker from "./components/Clicker/Clicker";
import Timer from "./components/Timer/Timer";
import ShopDisplay from "./components/Shop/Shop";
import { useCallback } from "react";

//I need a list of shop upgrades for the user to buy

//I need two global variables: one to store the cookie counter, one to store the cookies per second

// stretch goal, fetch API upgrades, maybe make my own API?

// const upgrades = [{}, {}];

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [cps, setCps] = useState(1);
  const [clicked, setClicked] = useState(false);
  //   //   //I need a timer to track the biscuits, keeping an eye on the bps

  function stressClicker() {
    setClicked(true);
    setClicks((clicks) => clicks + 1); //skips needing return
    // console.log(clicks);
  }

  const incrementClicker = useCallback(() => {
    //Emily suggested this, apparently it stops the increment functions from being re-rendered every time.
    setClicks((newClicks) => {
      const newTotal = newClicks + cps;
      return newTotal;
    });
  }, [cps]);

  function shopBuy(cost, increase) {
    if (clicks >= cost) {
      setClicks((newClicks) => newClicks - cost);
      setCps((newCps) => newCps + increase);
    }
  }

  return (
    <div className="main-page">
      <Header />
      <main className="main-container">
        <Clicker click={stressClicker} />
        <div className="count">
          <br />
          <h3>Bad vibes deposited:</h3>
          <h2> {clicks}</h2>
          <h3>Vibes per second:</h3>
          <h2>{cps}</h2>
        </div>
        {clicked ? (
          <Timer incrementClicker={incrementClicker} cps={cps} />
        ) : null}
        <ShopDisplay onPurchase={shopBuy} />
      </main>
    </div>
  );
}
