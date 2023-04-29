type HeadingProps = {
    children: string
}

const Heading = ({ children }: HeadingProps) => {

    return (
        <h1 className="text-center text-3xl my-4">
            {children}
        </h1>
    )
}

export default Heading