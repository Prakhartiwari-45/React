import Chai from "./Chai"
function App() {

  const username = "chai aur code"
  return (
    <>
      <Chai/>
      <h1>Chai Aur React | Prakhar Tiwari {username}</h1>
      {/* here {username} is an evaluated expression */}
    </>
  )
}

export default App
