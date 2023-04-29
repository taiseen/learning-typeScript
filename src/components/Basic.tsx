import { Greet, Heading, Oscar, Person, PersonList, Status, Style, Subject } from ".";
import { nameList } from "../constants/data";


const Basic = () => {


    // object type props...
    const personName = {
        firstName: "Taiseen",
        lastName: "Azam",
    }


    return (
        <>

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


            {/* inline css prop type */}
            <Style style={{ border: '1px solid red', padding: '10px', margin: '20px 0' }} />

        </>
    )
}

export default Basic