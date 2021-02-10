# `@annexe/isfinite`

A Typescript utility function to assert whether a value is finite.

## Installation

To install @annexe/isfinite:

### Yarn

```sh
yarn add @annexe/isfinite
```

### NPM

```sh
npm install @annexe/isfinite
```

## Usage

```ts
import { isFinite } from '@annexe/isfinite';

console.log(isFinite(Infinity)); // logs FALSE
console.log(isFinite(123)); // logs TRUE
console.log(isFinite(3.142)); // logs TRUE
```
