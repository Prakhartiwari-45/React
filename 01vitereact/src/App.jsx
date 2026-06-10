import Chai from "./Chai";

function App() {
  // Username displayed in the main heading //This is a  evaluated expression
  const username = "Chai aur Code";

  return (
    <>
      {/* Main app heading username is evaluated expression of js */} 
      <h1>Hello React with Vite {username}|Prakhar Tiwari</h1>
      {/* Reusable Chai component */}
      <Chai />
      {/* Introductory paragraph about React + Vite */}
      <p>
        Welcome to the world of React and Vite! This is a simple React
        application set up with Vite as the build tool. Vite provides a fast
        development experience with hot module replacement and optimized builds.
      </p>
    </>
  );
}

export default App;
