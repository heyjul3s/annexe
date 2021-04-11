# `@annexe/isplainobject`

A Typescript utility function to assert whether a value is a plain object literal type.

## Installation

To install @annexe/isplainobject:

### Yarn

```sh
yarn add @annexe/isplainobject
```

### NPM

```sh
npm install @annexe/isplainobject
```

## Usage

```ts
import { isPlainObject } from '@annexe/isplainobject';

console.log(isPlainObject(123)); // logs FALSE
console.log(isPlainObject({ id: 1, name: 'John Doe' })); // logs TRUE
```
