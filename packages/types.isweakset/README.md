# `@annexe/isweakset`

A utility function to check if a value is of Weak Set type.

## Installation

To install @annexe/isweakset

### Yarn

```sh
yarn add @annexe/isweakset
```

### NPM

```sh
npm install @annexe/isweakset
```

## Usage

```ts
import { isWeakSet } from '@annexe/isweakset';

console.log(isSet(123)); // logs FALSE
console.log(isSet(new WeakSet()); // logs TRUE
```
