# `@annexe/partialright`

A function to partially apply function arguments.

## Installation

To install @annexe/partialright:

### Yarn

```sh
yarn add @annexe/partialright
```

### NPM

```sh
npm install @annexe/partialright
```

## Usage

```ts
import { partialRight } from '@annexe/partialright';

const sum = (a: number, b: number, c: number) => a + b;
const partialFn = partialRight<number[], number[], number>(sum, 2, 3);
console.log(partialFn(1)); // prints 6
```
