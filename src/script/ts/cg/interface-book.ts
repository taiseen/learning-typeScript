// 07 - May - 2023
// interface - Book Example 

// interface can - 
// 1) extends
// 2) marge

(() => {

    // when interface's have same name then TS going to marge them together & create 1

    interface IBook {   // <== same name "IBook" 🔴🔴🔴
        name: string;
        price: number;
    }

    interface IBook {   // <== same name "IBook" 🔴🔴🔴
        type: string;
    }

    interface IEBook extends IBook {
        fileSize: number;
        format: string;
    }

    interface IAudioBook extends IEBook {
        duration: number;
    }

    // 🟩🟩🟩 interface - can extends + marge
    // 🟩🟩🟩 type      - can union

    type BookType = IBook | IEBook | IAudioBook;

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    const book1: BookType = {
        name: "Focus",
        price: 150,
        type: 'Normal Book',
    }

    const book2: BookType = {
        name: 'Deep Work',
        price: 220,
        type: 'EBook',
        format: 'pdf',
        fileSize: 10,
    }

    const book3: BookType = {
        name: 'Atomic Habit',
        price: 350,
        type: 'Audio Book',
        fileSize: 25,
        duration: 2,
    }

    // console.log(book1);
    // console.log(book2);
    // console.log(book3);

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

})()