import { useEffect } from "react";

export default function Timer({ incrementClicker, cps }) {
  useEffect(() => {
    let myInterval = setInterval(() => {
      incrementClicker();
    }, 1000);
    return () => clearInterval(myInterval);
  }, [incrementClicker, cps]);
}
