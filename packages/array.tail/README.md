# `@annexe/tail`

A utility function that returns all but the first element of an array by default. You can also provide an index to where you want it to stop at as a second argument.

## Installation

To install @annexe/tail:

### Yarn

```sh
yarn add @annexe/tail
```

### NPM

```sh
npm install @annexe/tail
```

## Usage

```ts
import { tail } from '@annexe/tail';

const myArray = [1, 2, 3, 4, 5];

console.log(tail<number>(myArray)); // logs [2, 3, 4, 5]
```
