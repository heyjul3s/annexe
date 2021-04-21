# `@annexe/isset`

A utility function to check if a value is of Set type.

## Installation

To install @annexe/isset

### Yarn

```sh
yarn add @annexe/isset
```

### NPM

```sh
npm install @annexe/isset
```

## Usage

```ts
import { isSet } from '@annexe/isset';

console.log(isSet(123)); // logs FALSE
console.log(isSet(new Set([1, 2, 3])); // logs TRUE
```
