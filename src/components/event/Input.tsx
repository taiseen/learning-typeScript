type InputProps = {
    value?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({ value, handleChange }: InputProps) => {

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value);
    // }

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            className="inputText"
        />
    )
}


export default Input