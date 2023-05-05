// conditional-types
// a type is dependent on another type...

type t1 = string;
type t2 = number;
type t3 = null;
type t4 = undefined;

type t5 = t1 extends string ? string : null;

type t6 = t1 extends null
    ? null
    : t2 extends string
    ? string
    : t3 extends string
    ? string
    : t4 extends string
    ? null
    : never


type phones = {
    pA: string
    pB: string
}

// type p = keyof phones;

type checkProperty<T, K> = K extends keyof T ? true : false;

type checkPhone = checkProperty<phones, 'pA'>

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// statically removed type from ==> union type list... (pLanguage)

type pLan = 'JavaScript' | 'Python' | 'Ruby' | 'TypeScript';

type sRemovePL<T> = T extends 'Ruby' ? never : T;

type sRemoveResult = sRemovePL<pLan>;


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// dynamically removed type from ==> union type list... (pLanguage)

type pLanguage = 'JavaScript' | 'Python' | 'Ruby' | 'TypeScript';

type dRemovePL<T, R> = T extends R ? never : T;

type dRemovedResult = dRemovePL<pLanguage, 'Python'>;