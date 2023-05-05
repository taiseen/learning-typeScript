type Data = { num1: number }

type B = {
    [key in keyof Data]: string;
}

const numbers: B = {
    num1: '20'
}