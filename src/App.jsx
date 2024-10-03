import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>Welcome Snigdh</h2>
      <Button>Started</Button> */}
      <Hero />
    </>
  );
}

export default App;
