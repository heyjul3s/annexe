# `@annexe/isnil`

A Typescript utility function to assert whether a value is null or undefined.

## Installation

To install @annexe/isnil:

### Yarn

```sh
yarn add @annexe/isnil
```

### NPM

```sh
npm install @annexe/isnil
```

## Usage

```ts
import { isNil } from '@annexe/isnil';

console.log(isNil('3.142')); // logs FALSE
console.log(isNil(null)); // logs TRUE
console.log(isNil(undefined)); // logs TRUE
```
