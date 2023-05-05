> 28 - April - 2023

* yarn create vite --template react-ts PROJECT_NAME
* yarn add -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
* yarn add -D @types/node
* yarn add -D ts-node-dev


```
nvm list

nvm install 18.16.0

nvm use 18.16.0 [run as administrator at cmd]
```


```
use "types" when building "applications" & 
use "interfaces" when building "libraries"
```

## Learning Context:- 
* these things, we'll probably memorize, without even realizing...

|No| Context                    | Short Form                    |
|--|----------------------------|-------------------------------|
|1 | primitive type             | string, number, boolean       |
|2 | object type                | { }                           |
|3 | array type \| array of objects type  | { }[ ]              |
|4 | union of string literal types - <br/> not allow any random string | 'loading' \| 'error' \| 'success' |
|5 | children prop              | children: string              |
|6 | children prop <br> when its React Component  | children: React`.ReactNode` |
|7 | optional prop type         | extraSubject`?`: string       |
|8 | empty event prop `onClick` | handleClick: () => void       |
|9 | with event prop `onClick`  | handleClickEvent: (e: React`.Mouse`Event\<HTML`Button`Element>) => |
|10 | with id prop `onClick`    | handleClickId: (id: number) => void |
|11 | input type prop `onChange`| handleChange: (e: React`.Change`Event\<HTML`Input`Element>) =>     |
|12 | inline css prop type      | style: React.CSSProperties    |
|13 | useState type             | useState<null \| User>(null) <-- value come at future |
|14 | useReducer type           | Mother = Child1 \| Child2 <-- Discriminated Unions |
|15 | createContext type        | ( { } as UserContextProps ) <-- Type Assertion |



<br /><br /><br />

```
[note]
an "automated test" is code that throws an error, 
when the actual output does not match the expected output...

it will pass when the output is correct & 
provide meaningful feedback when it is not
```