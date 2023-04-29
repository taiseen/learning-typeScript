import { Greet, Heading, Oscar, Person, PersonList, Status, Subject } from "./components";
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
      <Greet name='Taiseen' messageCount={5} isLogin={true} />


      {/* object type */}
      <Person name={personName} />


      {/* array of objects type */}
      <PersonList nameList={nameList} />


      {/* union of string literal types */}
      <Status status="success" />


      {/* children props */}
      <Heading>Hello form heading component...</Heading>


      {/* children props as React Components */}
      <Oscar>
        <Heading>Oscar goes to Taiseen Azam</Heading>
      </Oscar>


      {/* Optional props type */}
      <Subject mainSubject="CSE" />


    </div>
  )
}

export default App