# `@annexe/istypedarray`

A function to check if value is a TypedArray.

## Installation

To install @annexe/istypedarray

### Yarn

```sh
yarn add @annexe/istypedarray
```

### NPM

```sh
npm install @annexe/istypedarray
```

## Usage

```ts
import { isTypedArray } from '@annexe/istypedarray';

console.log(isTypedArray(123)); // logs FALSE
console.log(isTypedArray(new Int8Array()); // logs TRUE
```
