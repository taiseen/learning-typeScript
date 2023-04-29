type StatusProps = {
    // its allowed any random string...
    // status: string  

    // union of string literal types 
    // so, only allowed these list of strings...
    status: 'loading' | 'error' | 'success',
}


const Status = ({ status }: StatusProps) => {

    let message;
    let color;

    if (status === 'loading') {
        message = 'Loading...';
        color = 'text-purple-600';
    } else if (status === 'error') {
        message = 'Error at fetching data...';
        color = 'text-red-600';
    } else if (status === 'success') {
        message = 'Data fetching successfully...';
        color = 'text-green-600';
    }

    return (
        <div className={`text-center text-3xl ${color}`}>
            Status - {message}
        </div>
    )
}

export default Status