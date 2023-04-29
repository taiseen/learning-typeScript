type ButtonIDProps = {
    handleClickId: (id: number) => void
}

const ButtonID = ({ handleClickId }: ButtonIDProps) => {

    return (
        <button className="btn" onClick={() => handleClickId(5)}>
            Button with ID
        </button>
    )
}

export default ButtonID