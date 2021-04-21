# `@annexe/partial`

A function to partially apply function arguments.

## Installation

To install @annexe/partial:

### Yarn

```sh
yarn add @annexe/partial
```

### NPM

```sh
npm install @annexe/partial
```

## Usage

```ts
import { partial } from '@annexe/partial';

const sum = (a: number, b: number) => a + b;
const partialFn = partial<number[], number[], number>(sum, 1);
console.log(partialFn(2)); // prints 3
```
