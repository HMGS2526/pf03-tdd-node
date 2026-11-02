import { test } from 'node:test';
import assert from 'node:assert/strict';
import { esPinValido } from '../src/esPinValido.js';

test('rechaza null y undefined', () => {
  assert.equal(esPinValido(null), false);
  assert.equal(esPinValido(undefined), false);
});

test('rechaza cadena vacía', () => {
  assert.equal(esPinValido(''), false);
});

test('acepta PIN de 4 dígitos válido', () => {
  assert.equal(esPinValido('1234'), true);
});

test('acepta PIN de 6 dígitos válido', () => {
  assert.equal(esPinValido('123456'), true);
});

test('rechaza longitudes distintas de 4 o 6', () => {
  assert.equal(esPinValido('123'), false);
  assert.equal(esPinValido('12345'), false);
  assert.equal(esPinValido('1234567'), false);
});

test('rechaza caracteres que no son dígitos', () => {
  assert.equal(esPinValido('12a4'), false);
  assert.equal(esPinValido('12 45'), false);
  assert.equal(esPinValido('12-456'), false);
});

test('rechaza PIN con todos los dígitos iguales', () => {
  assert.equal(esPinValido('1111'), false);
  assert.equal(esPinValido('888888'), false);
});

test('rechaza valores que no son string', () => {
  assert.equal(esPinValido(1234), false);
});