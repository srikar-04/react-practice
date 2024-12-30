import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [count, setCount] = useState(0);

  const data = {
    name: "srikar",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAapfpPXYxgRmF0yA2J6G-uH4yj2j5Vcm5vFHmbJFjBujlsDdGWL_A6-BGNEnUdORPtpJBtQN5Me6dJzB2-CGgM-JZJbwCb4RMw2c1QCZeIw`,
  };

  return (
    <>
    <div>
      <PasswordGenerator />
    </div>
    </>
  );
}

export default App;
