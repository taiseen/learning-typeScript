// 05 - May - 2023

// Promise Asynchronous 

const makePromiseString = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        const data = 'Moke data fetching...';

        data
            ? resolve(data)
            : reject('error: at data fetching time...')
    })
}

const getString = async (): Promise<void> => {
    const data = await makePromiseString();
    console.log(data);
}
getString();

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const makePromiseNumber = (): Promise<number> => {

    return new Promise<number>((resolve, reject) => {

        const data = 10_00_000;

        data
            ? resolve(data)
            : reject('error: at data fetching time...')
    })
}

const getNumber = async (): Promise<void> => {
    const data = await makePromiseNumber();
    console.log(data);
}
getNumber();

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const makePromiseBoolean = (): Promise<boolean> => {

    return new Promise<boolean>((resolve, reject) => {

        const data = true;

        data
            ? resolve(data)
            : reject('error: at data fetching time...')
    })
}

const getBoolean = async (): Promise<void> => {
    const data = await makePromiseBoolean();
    console.log(data);
}
getBoolean();

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

interface IDataType { name: string }

const makePromiseObject = (): Promise<IDataType> => {

    return new Promise<IDataType>((resolve, reject) => {

        const data = { name: 'Zen' };

        data
            ? resolve(data)
            : reject(new Error('error: at data fetching time...'))
    })
}

const getObject = async (): Promise<void> => {
    const data = await makePromiseObject();
    console.log(data);
}
getObject();

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

interface IFetchDataType {
    userId: string
    id: number,
    title: string
    completed: boolean
}

const getDataFormJsonPlaceHolder = async (): Promise<IFetchDataType> => {
    // 🔴 node v-18.16.0 "fetch" support by default... 🔴
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

const getData = async (): Promise<void> => {
    const data = await getDataFormJsonPlaceHolder();
    console.log(data);
};

getData();

