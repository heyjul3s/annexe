# `@annexe/ismap`

A utility function that checks if a value is a map object.

## Installation

To install @annexe/ismap:

### Yarn

```sh
yarn add @annexe/ismap
```

### NPM

```sh
npm install @annexe/ismap
```

## Usage

```ts
import { isMap } from '@annexe/ismap';

console.log(isMap(123)); // logs FALSE
console.log(isMap(new Map()); // logs TRUE
```
