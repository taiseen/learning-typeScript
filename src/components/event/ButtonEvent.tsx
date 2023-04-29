type ButtonEventProps = {
    handleClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void
}


const ButtonEvent = ({ handleClickEvent }: ButtonEventProps) => {

    return (
        <button className="btn" onClick={handleClickEvent}>
            Button With Event
        </button>
    )
}

export default ButtonEvent