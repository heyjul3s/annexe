# `@annexe/head`

A function that returns the first element as an array and optionally to a specified index. You can also provide an index to where you want it to stop at as a second argument.

## Usage

```ts
import { head } from '@annexe/head';

const myArray = [1, 2, 3, 4, 5];
console.log(head<number>(myArray)); // logs [1]
console.log(head<number>(myArray, 2)); // logs [1, 2]
```
