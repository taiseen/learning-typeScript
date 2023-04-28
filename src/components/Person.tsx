// object type props...
type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}

const Person = ({ name }: PersonProps) => {

    return (
        <div className="text-center text-2xl">
            <h1>
                {name.firstName} {name.lastName}
            </h1>
        </div>
    )
}

export default Person