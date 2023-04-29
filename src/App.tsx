import { Box, ThemeContextProvider, User, UserContextProvider } from "./context";
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


      {/* context props type */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>


      {/* context props type - future coming value type*/}
      <UserContextProvider>
        <User />
      </UserContextProvider>


    </div>
  )
}

export default App