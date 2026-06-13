import { useState } from "react";

function App() {
  // Current background color for the page.
  const [color, setColor] = useState("olive");

  return (
    // Full-screen container that uses the selected color.
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Button panel fixed near the bottom of the screen. */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Change background to red. */}
          {/* Red color button with red background styling. */}
          <button
          //we have to pass like this in onClick beacuse it accepts a function anf if we do like that
          //onClick({setColor('red')}) we cannot pass argumnet in it and we have to so we filre a call back
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
          >
            Red
          </button>

          {/* Change background to yellow. */}
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          {/* Change background to green. */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          {/* Change background to blue. */}
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
