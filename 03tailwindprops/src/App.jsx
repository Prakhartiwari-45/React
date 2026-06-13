import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // React state example (currently unused in UI)
  const [count, setCount] = useState(0);

  // Example object that can be passed as props if needed
  let myObj = {
    name: "Prakhar",
    age: 21,
  };

  // Example array data
  let newArr = [1, 2, 3];

  return (
    <>
      {/* Main heading styled with Tailwind utility classes */}
      <h1 className="bg-green-400 text-yellow p-4 rounded-xl mb-4">
        Tailwaind Test
      </h1>

      {/* Card component with both username and link props */}
      <Card username="Chai Aur Code" link="Hello Click This"  someObj={myObj} someArr={newArr} />

      {/* Card component with only username prop */}
      <Card username="Prakhar" />
    </>
  );
}

export default App;
