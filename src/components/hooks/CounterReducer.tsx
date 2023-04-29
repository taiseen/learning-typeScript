import { useReducer } from 'react';


const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


// TypeScript type..........
type CounterState = {
    count: number
}

// TypeScript type..........
type UpdateAction = {
    type: typeof INCREMENT | typeof DECREMENT
    payload: number
}

// TypeScript type..........
type ResetAction = {
    type: typeof RESET
}

// this feature is called "discriminated unions" in typescript 
// is the recommended approach for typing reducer functions
type CounterAction = UpdateAction | ResetAction;


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT:
            return { ...state, count: state.count - action.payload };
        case RESET:
            return initialState;
        default:
            return state;
    }
}


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className='border border-gray-600 flex justify-center items-center my-4'>

            <button className='btn' onClick={() => dispatch({ type: DECREMENT, payload: 10 })}>
                Decrement -10
            </button>


            <p className='text-2xl'>
                Count : <span className='text-red-400'>{state.count}</span>
            </p>


            <button className='btn' onClick={() => dispatch({ type: INCREMENT, payload: 10 })}>
                Increment +10
            </button>



            <button className='btn text-red-500' onClick={() => dispatch({ type: RESET })}>
                Reset
            </button>

        </div>
    )
}

export default CounterReducer