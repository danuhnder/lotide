# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @danuhnder/lotide`

**Require it:**

`const _ = require('@danuhnder/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: asserts if two arrays are equal;
* `assertEqual(val1, val2)`: asserts if two values are equal;
* `assertObjectsEqual(object1, object2)`: asserts if two objects are equal;
* `countLetters(string)`: takes an input string and returns an object containing the characters used and frequency of use;
* `countOnly(array, object)`: returns the count of elements from the array ONLY if they are truthy in the object;
* `eqArrays(array1, array2)`: returns true if input arrays are equal;
* `eqObjects(object 1, object2)`: returns true if input objects are equal;
* `findKey(obj, callback)`: returns the key of the object selected by the callback function;
* `findKeyByValue(object, value)`: returns the key of the object that matches the supplied value;
* `flatten(array)`: returns a single array of values from an array containing values and/or arrays of values;
* `head(array)`: returns the first value of an array;
* `letterPositions(string)`: returns an object with the index position of each character in the string;
* `map(array, callback)`: performs the callback function on each element of the array and returns a new array;
* `middle(array)` returns the middle value(s) from an array of at least three elements;
* `tail(array)` returns all but the first element of the input array;
* `takeUntil(array, callback)` iterates over supplied array until callback condition is met and returns a new array of all elemtns until that point;
* `without(array1, array2)` returns a new array of items that exist in array1 and NOT in array2;
