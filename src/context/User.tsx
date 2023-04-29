import { atFutureUserValueCome } from "../constants/data";
import { useUserContext } from "./UserContext";


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