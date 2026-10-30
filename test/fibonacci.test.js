import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fibonacci } from '../src/fibonacci.js';

test('fibonacci(0) devuelve 0', () => {
  assert.equal(fibonacci(0), 0);
});

test('fibonacci(1) devuelve 1', () => {
  assert.equal(fibonacci(1), 1);
});

test('fibonacci(2) devuelve 1', () => {
  assert.equal(fibonacci(2), 1);
});

test('fibonacci(10) devuelve 55', () => {
  assert.equal(fibonacci(10), 55);
});

test('fibonacci(20) devuelve 6765', () => {
  assert.equal(fibonacci(20), 6765);
});

test('lanza RangeError si n es negativo', () => {
  assert.throws(() => fibonacci(-1), {
    name: 'RangeError',
    message: 'solo números enteros ≥ 0',
  });
});

test('lanza RangeError si n no es entero', () => {
  assert.throws(() => fibonacci(2.5), RangeError);
  assert.throws(() => fibonacci('a'), RangeError);
  assert.throws(() => fibonacci(undefined), RangeError);
});