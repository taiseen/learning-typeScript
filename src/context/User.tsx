import { atFutureUserValueCome } from "../constants/data";
import { useUserContext } from "./UserContext";

/*
a context always has to be "created" [outside] the component
& its future value will always be "set" [inside] a component

so there is that gap that needs to be plugged by this Type Assertion ✅
*/

const User = () => {

    const { user, setUser } = useUserContext();

    const handleLogin = () => setUser(atFutureUserValueCome);
    const handleLogout = () => setUser(null);

    return (
        <div className='border border-gray-600 flex flex-col justify-center items-center my-4 py-2'>

            <p>User Context with TypeScript...</p>

            <div>
                <button className="btn" onClick={handleLogin}>Login</button>
                <button className="btn-out" onClick={handleLogout}>Logout</button>
            </div>

            <div>
                <p>User name : {user?.name}</p>
                <p>User email : {user?.email}</p>
            </div>

        </div>
    )
}

export default User