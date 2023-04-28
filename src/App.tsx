import { Greet, Person, PersonList } from "./components";
import { nameList } from "./constants/data";


const App = () => {


  // object type props...
  const personName = {
    firstName: "Taiseen",
    lastName: "Azam",
  }


  return (
    <div className="container mx-auto mt-4">


      {/* primitive type */}
      <Greet name='Taiseen' messageCount={5} isLogin={false} />


      {/* object type */}
      <Person name={personName} />


      {/* array of objects type */}
      <PersonList nameList={nameList} />


    </div>
  )
}

export default App