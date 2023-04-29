import { atFutureUserValueCome } from '../../constants/data';
import { useState } from 'react';


// TypeScript type..........
type User = {
    name: string;
    email: string;
}


const StateUser = () => {

    // initially null but at future value come...
    const [user, setUser] = useState<null | User>(null);

    // const [user, setUser] = useState({} as User);    // <=== Type Assertion


    const handleLogIn = () => setUser(atFutureUserValueCome);
    const handleLogOut = () => setUser(null);


    return (
        <div>
            <button className="btn" onClick={handleLogIn}>User Login</button>
            <button className="btn-out" onClick={handleLogOut}>User Logout</button>

            <div>
                <p>User name :- {user?.name}</p>
                <p>User email :- {user?.email}</p>
            </div>
        </div>
    )
}

export default StateUser