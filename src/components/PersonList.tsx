// array of objects type...
type PersonListProps = {
    nameList: {
        first: string
        last: string
    }[]
}

const PersonList = ({ nameList }: PersonListProps) => {
    return (
        <div>
            {
                nameList.map(({ first, last }) =>
                    <h1 key={first}>
                        {first} {last}
                    </h1>
                )
            }
        </div>
    )
}

export default PersonList