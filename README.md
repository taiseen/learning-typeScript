> 28 - April - 2023

* yarn create vite --template react-ts PROJECT_NAME
* yarn add -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p


```
use "types" when building "applications" & 
use "interfaces" when building "libraries"
```

## Learning Context:- 
* these things, we'll probably memorize, without even realizing...

|No| Context                    | Short Form              |
|--|----------------------------|-------------------------|
|1 | primitive type             | string, number, boolean |
|2 | object type                | { }                     |
|3 | array type \| array of objects type  | { }[ ]        |
|4 | union of string literal types <br/> (not allow any random strings...) | 'loading' \| 'error' \| 'success' |
|5 | children prop              | children: string        |
|6 | children prop <br> when its React Component  | children: React`.ReactNode` |
|7 | optional prop type         | extraSubject`?`: string   |
|8 | empty event prop `onClick` | handleClick: () => void   |
|9 | with event prop `onClick`  | handleClickEvent: (e: React`.Mouse`Event\<HTML`Button`Element>) => void |
|10 | with id prop `onClick`    | handleClickId: (id: number) => void |
|11 | input type prop `onChange`| handleChange: (e: React`.Change`Event\<HTML`Input`Element>) => void |
|12 | inline css prop type      | style: React.CSSProperties|



<br /><br /><br />

```
[note]
an "automated test" is code that throws an error, 
when the actual output does not match the expected output...

it will pass when the output is correct & 
provide meaningful feedback when it is not
```