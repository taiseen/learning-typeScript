import { useState, createContext, useContext } from 'react';


//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

type User = {
    name: string
    email: string
}

//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

type UserContextProps = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

type UserContextProviderProps = {
    children: React.ReactNode
}

//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


/*
a context always has to be "created" [outside] the component
& its future value will always be "set" [inside] a component

so there is that gap that needs to be plugged by this Type Assertion ✅
*/

const UserContext = createContext({} as UserContextProps);  // <=== Type Assertion ✅


const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>

            {children}

        </UserContext.Provider>
    )
}

export default UserContextProvider;


// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);