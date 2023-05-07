"use strict";
// 07 - May - 2023
// interface - Book Example 
// interface can - 
// 1) extends
// 2) marge
(() => {
    // when interface's have same name then TS going to marge them together & create 1
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    const book1 = {
        name: "Focus",
        price: 150,
        type: 'Normal Book',
    };
    const book2 = {
        name: 'Deep Work',
        price: 220,
        type: 'EBook',
        format: 'pdf',
        fileSize: 10,
    };
    const book3 = {
        name: 'Atomic Habit',
        price: 350,
        type: 'Audio Book',
        fileSize: 25,
        duration: 2,
    };
    // console.log(book1);
    // console.log(book2);
    // console.log(book3);
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
})();
