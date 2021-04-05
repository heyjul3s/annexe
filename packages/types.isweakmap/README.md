# `@annexe/isweakmap`

A utility function to validate if a value is a Weak Map type

## Installation

To install @annexe/isweakmap

### Yarn

```sh
yarn add @annexe/isweakmap
```

### NPM

```sh
npm install @annexe/isweakmap
```

## Usage

```ts
import { isWeakMap } from '@annexe/isweakmap';

console.log(isWeakMap(123)); // logs FALSE
console.log(isWeakMap(new WeakMap()); // logs TRUE
```
