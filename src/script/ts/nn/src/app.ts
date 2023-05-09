import { HasFormatter } from "./interface/HasFormatter.js";
import ListTemplate from "./class/ListTemplate.js";
import Invoice from "./class/Invoice.js";
import Payment from "./class/Payment.js";


// 1st get the all needful DOM elements to work with...
// by using this (❗) mark to say TS, look I know this exists...
const anchor = document.querySelector('a')!;
// console.log(anchor.href);


// typecasting using (as) keyword...
// what type of element this is going to be???...
// we can cast it to be (certain) type by using (as) keyword...
// so by using (as) keyword we say it's never going to be null &
// it's always going to be a (certain) type that we cast...
const form = document.querySelector('.new-item-form') as HTMLFormElement; // class selection

const type = document.querySelector('#type') as HTMLSelectElement; // id selection

const toForm = document.querySelector('#toForm') as HTMLInputElement; // id selection
const amount = document.querySelector('#amount') as HTMLInputElement; // id selection
const details = document.querySelector('#details') as HTMLInputElement; // id selection

const ul = document.querySelector('ul')!; // tag selection (❗)
const list = new ListTemplate(ul);


type inputTuple = [string, string, number];


// add button click...
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    const inputValues: inputTuple = [toForm.value, details.value, amount.valueAsNumber];

    // take input & create object based on dropdown 
    type.value === 'invoice'
        ? doc = new Invoice(...inputValues)
        : doc = new Payment(...inputValues)

    // add to UI...
    list.render(doc, type.value, 'start');
});