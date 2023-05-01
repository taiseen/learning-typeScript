const myFriends: string[] = ['Jon', 'Sam', 'Alex'];

const newFriends: string[] = ['Zen', 'Neo', 'Tom'];

// const friendList: string[] = myFriends.push(...newFriends);
// console.log(friendList);

myFriends.push(...newFriends);
// console.log(myFriends);

// const friendList: string[] = [...myFriends, ...newFriends];
// console.log(friendList);


const greetingFriends = (...friendList: string[]): void => friendList.forEach((name: string) => console.log(`Hi ${name}`));
greetingFriends('Bob', 'Don', 'Jon');