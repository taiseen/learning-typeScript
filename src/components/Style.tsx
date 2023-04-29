type StyleProps = {
    style: React.CSSProperties  // <=== its restrict, to be only valid css properties...
}

const Style = ({ style }: StyleProps) => {

    return (
        <div style={style}>
            This is inline css styling through props...
        </div>
    )
}

export default Style