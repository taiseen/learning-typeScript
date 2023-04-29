type ButtonProps = {
    handleClick: () => void
}


const Button = ({ handleClick }: ButtonProps) => {

    return (
        <button className="btn" onClick={handleClick}>
            Button
        </button>
    )
}

export default Button