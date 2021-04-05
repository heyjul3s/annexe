# `@annexe/isnonemptystring`

A Typescript utility function to assert whether a value is a string type.

## Installation

To install @annexe/isnonemptystring:

### Yarn

```sh
yarn add @annexe/isnonemptystring
```

### NPM

```sh
npm install @annexe/isnonemptystring
```

## Usage

```ts
import { isNonEmptyString } from '@annexe/isnonemptystring';

console.log(isNonEmptyString('')); // logs FALSE
console.log(isNonEmptyString('I am a string')); // logs TRUE
```
