// this type is going to be always an {Object}...
type GreetProps = {
    name: string
    messageCount: number
    isLogin: boolean
}

const Greet = ({ name, messageCount, isLogin }: GreetProps) => {

    return (
        <div className="text-center text-2xl">
            <h2>
                {
                    isLogin
                        ? `Welcome ${name}! You have ${messageCount} unread messages...`
                        : `Welcome Guest`
                }
            </h2>
        </div>
    )
}

export default Greet