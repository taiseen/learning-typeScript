// Object | Function | Array <== these all are object in JavaScript...

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Object 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// for Primitive type - we can use ==> Alias Type...
type User_Type = {
    name: string
    age: number
}

type Union_User_Type = User_Type & {
    role: string
}

// type rollNumber = number;

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// for Object type - we can use ==> Interface
interface IUser {
    name: string
    age: number
}

interface IExtend_User extends IUser {
    role: string
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const user_With_Type: User_Type = {
    name: 'Sam',
    age: 25
}

const user_With_Type_Union: Union_User_Type = { // union & intersection...
    name: 'Neo',
    age: 23,
    role: 'Student'
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const user_With_Interface: IUser = {
    name: 'Tom',
    age: 24
}

const user_With_Extend_Interface: IExtend_User = {
    name: 'Jon',
    age: 26,
    role: 'Student'
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// console.log(user_With_Type);
// console.log(user_With_Type_Union);

// console.log(user_With_Interface);
// console.log(user_With_Extend_Interface);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Function 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

// with out function type Signature...
const addNumber = (a: number, b: number): number => a + b;


// function signature ==> by type...
// mostly user this pattern...
type addNumberType = (a: number, b: number) => number; // <== function type signature...


// function signature ==> by interface...
interface IAddNumberType {
    (a: number, b: number): number // <== function type signature..
}

const addNumberA: addNumberType = (a, b) => a + b;
const addNumberB: IAddNumberType = (a, b) => a + b;

// console.log(addNumber(1, 1));
// console.log(addNumberA(2, 2));
// console.log(addNumberB(5, 5));


type UserType = 'admin' | 'user';
// type IsAdminFun = ;                                              // 🟢 normal (){} function
// type LoginFun = (username: string, password: string) => void;    // 🟢 arrow =()=>{} function

interface IAuth {
    name: string;
    pass: string;
    type: UserType;
    isAdmin(type: UserType): boolean;                       // 🟢 normal (){} function
    login: (username: string, password: string) => void;    // 🟢 arrow =()=>{} function
    // login: LoginFun;                                     // 🟢 arrow =()=>{} function
}

const userLogin: IAuth = {
    name: 'Xen',
    pass: '123',
    type: 'admin',
    login: (username: string, password: string) => {                    // 🟢 arrow =()=>{} function
        console.log('User login info:-', { username }, { password });
        // return `User login info:- {username: ${username}} {password: ${password}}`;
    },
    isAdmin(type: UserType) {                                           // 🟢 normal (){} function
        return type === 'admin' ? true : false;
    }
}

console.log(userLogin);
console.log(userLogin.isAdmin(userLogin.type));
userLogin.login(userLogin.name, userLogin.pass);


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Array 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴


type rollNumbersType = number[];

const rollNumbersA: rollNumbersType = [1, 3, 5];
// console.log(rollNumbersA);

interface IRollNumbers { // this pattern called Indexing pattern...
    [index: number]: number
}

const rollNumbersB: IRollNumbers = [2, 4, 6];
// console.log(rollNumbersB);