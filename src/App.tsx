import { Basic, Events, Hooks } from "./components";


const App = () => {

  return (
    <div className="container mx-auto mt-4">

      {/* basic props type */}
      <Basic />

      {/* event props type */}
      <Events />

      {/* hook props type */}
      <Hooks />

    </div>
  )
}

export default App