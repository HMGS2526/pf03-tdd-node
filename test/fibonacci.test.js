import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

const MENSAJE = 'solo números enteros entre 0 y 78';

describe('fibonacci', () => {
  describe('casos base', () => {
    it('devuelve 0 para n = 0', () => {
      expect(fibonacci(0)).toBe(0);
    });

    it('devuelve 1 para n = 1', () => {
      expect(fibonacci(1)).toBe(1);
    });

    it('devuelve 1 para n = 2', () => {
      expect(fibonacci(2)).toBe(1);
    });
  });

  describe('varios términos', () => {
    it('devuelve 5 para n = 5', () => {
      expect(fibonacci(5)).toBe(5);
    });

    it('devuelve 55 para n = 10', () => {
      expect(fibonacci(10)).toBe(55);
    });

    it('devuelve 6765 para n = 20', () => {
      expect(fibonacci(20)).toBe(6765);
    });

    it('genera correctamente los 10 primeros términos', () => {
      const obtenidos = Array.from({ length: 10 }, (_, i) => fibonacci(i));
      expect(obtenidos).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('cada término desde el 2 es la suma de los dos anteriores', () => {
      for (let n = 2; n <= 78; n++) {
        expect(fibonacci(n)).toBe(fibonacci(n - 1) + fibonacci(n - 2));
      }
    });

    it('devuelve un Number', () => {
      expect(typeof fibonacci(10)).toBe('number');
    });
  });

  describe('límite superior', () => {
    it('devuelve 5527939700884757 para n = 77', () => {
      expect(fibonacci(77)).toBe(5527939700884757);
    });

    it('devuelve 8944394323791464 para n = 78', () => {
      expect(fibonacci(78)).toBe(8944394323791464);
    });

    it('el resultado de n = 78 es un entero seguro', () => {
      expect(Number.isSafeInteger(fibonacci(78))).toBe(true);
    });
  });

  describe('entradas inválidas', () => {
    const entradasInvalidas = [
      ['un negativo', -1],
      ['un valor superior a 78', 79],
      ['un decimal', 2.5],
      ['NaN', NaN],
      ['Infinity', Infinity],
      ['-Infinity', -Infinity],
      ['una cadena numérica', '5'],
      ['null', null],
      ['undefined', undefined],
      ['un booleano', true],
      ['un array', [5]],
      ['un objeto', {}],
    ];

    it.each(entradasInvalidas)('lanza RangeError con %s', (_descripcion, entrada) => {
      expect(() => fibonacci(entrada)).toThrow(RangeError);
      expect(() => fibonacci(entrada)).toThrowError(new RangeError(MENSAJE));
    });
  });
});