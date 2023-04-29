import { Button, ButtonEvent, ButtonID, Input } from '..'


const Events = () => {

    const handleClick = () => console.log('handleClick');

    const handleClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target);

    const handleClickId = (id: number) => console.log('handleClickId', id);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value);

    return (
        <div>

            {/* normal event props type */}
            <Button handleClick={handleClick} />


            {/* with event props type */}
            <ButtonEvent handleClickEvent={handleClickEvent} />


            {/* with id props type */}
            <ButtonID handleClickId={handleClickId} />


            {/* input typing props */}
            <Input handleChange={handleChange} />

        </div>
    )
}

export default Events