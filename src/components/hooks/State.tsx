import { useState } from 'react';


const State = () => {

    /* 
    type inference:-

    typescript is smart enough to infer... 
    what the state variable type is... 
    based on the initial value we pass into it...
    */

    const [isLogin, setIsLogin] = useState(false); // <=== boolean type


    const handleLogIn = () => setIsLogin(true);
    const handleLogOut = () => setIsLogin(false);


    return (
        <div>
            <button className="btn" onClick={handleLogIn}>LogIn</button>
            <button className="btn-out" onClick={handleLogOut}>LogOut</button>

            <div>
                User is {isLogin ? 'login' : 'logout'}
            </div>
        </div>
    )
}

export default State