import { useState, useRef, useEffect } from 'react';


const RefMutable = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null); // <== Mutable References Type


    const stopTimer = () => intervalRef.current && window.clearInterval(intervalRef.current);


    const startTimer = () => {

        stopTimer(); // Clear any existing interval

        // we are mutating the reference value
        intervalRef.current = window.setInterval(() => { // we invoke the set interval function...

            // to increase the timer value...
            setTimer(prev => prev + 1);

        }, 1000) // by every 1 second
    };


    // when the component mounts
    useEffect(() => {
        startTimer() // Start the timer when the component mounts

        return () => {
            stopTimer() // Clean up the interval when the component unmounts
        }
    }, [])


    return (
        <div>
            <span>RefMutable</span>

            <p>Hook Timer - {timer}</p>

            <button className="btn" onClick={() => startTimer()}>Start Timer</button>
            <button className="btn-out" onClick={() => stopTimer()}>Stop Timer</button>

        </div>
    )
}

export default RefMutable