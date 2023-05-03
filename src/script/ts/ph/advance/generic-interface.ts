// 04 - May - 2023

// Generic ==> interface
// interface - construct always base on {object}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

type GenericTuple<T, U> = [T, U];

interface IDataQType { name: string } // <== {object} type data

const dataQ: GenericTuple<IDataQType, number> = [{ name: 'Zen' }, 23];

// console.log(dataQ);

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Dynamic Generic - Interface  🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

interface IGenericObj<T, A = undefined> {   // <== {object} type data
    name: string
    address: T
    isMarried?: A                           // optional data type... | but default ==> undefined 
}

interface IAddress { country: string }      // <== {object} type data
interface IMarried { status: boolean }      // <== {object} type data

const userInfoA: IGenericObj<number> = { name: 'Kim', address: 123 };
const userInfoB: IGenericObj<string, boolean> = { name: 'Ira', address: 'H-2/D', isMarried: false };
const userInfoC: IGenericObj<IAddress> = { name: 'Amy', address: { country: 'Canada' } };
const userInfoD: IGenericObj<IAddress, IMarried> = {
    name: 'Taj',
    address: { country: 'India' },
    isMarried: { status: true },
};

// console.log(userInfoA);
// console.log(userInfoB);
// console.log(userInfoC);
// console.log(userInfoD);
