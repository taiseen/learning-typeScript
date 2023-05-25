import { useRef, useEffect } from 'react'


const RefDom = () => {

    // to keep in mind when using the use 
    // ref hook for DOM references...
    const inputRef = useRef<HTMLInputElement>(null); // <== DOM References Type


    useEffect(() => { inputRef.current?.focus() }, [])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }


    return (
        <div className='border border-gray-600 flex justify-center items-center my-4 py-4 space-x-5'>

            <span>useRef Hook use...</span>
            <input
                type="text"
                ref={inputRef}
                onChange={handleInputChange}
                className='border border-gray-600 outline-none p-1' />

        </div>
    )
}

export default RefDom