// importing downloaded duck image from src folder
import logo from "./duck.png";
// import css file (white background black text)
import "./App.css";
// import useState and useEffect hooks
import { useState, useEffect } from "react";

function App() {
  // useState sets two new variables: clicks and size initialized to 0 and 300 respectively
  const [clicks, setClicks] = useState(0);
  const [size, setSize] = useState(300);

  // useEffect listens to clicks, and will adjust size depending on click's value
  useEffect(() => {
    if (clicks === 0) setSize(300);
    else setSize(size + 20);
  }, [clicks]);

  // react functions can only return one component, so we wrap everything in this code with <div></div> tags
  return (
    // giving div the App classname let's our css file modify whatever is assigned className App
    <div className="App">
      {/* simple header displays image size, using JSX to evaluate size variable*/}
      <h1>
        Duck is {size} by {size} pixels
      </h1>

      {/*this image displays the duck, with attributes defining its size, src (file for the image to display), and an onClick listener to increase click count, using setClicks defined by the useState hook*/}
      <img
        width={size}
        height={size}
        src={logo}
        onClick={() => {
          setClicks(clicks + 1);
        }}
      />

      {/* simple header displays click count, using JSX to evaluate clicks variable*/}
      <h1>You clicked the duck {clicks} times</h1>

      {/* reset button with an onClick listener that resets click count back to zero */}
      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;