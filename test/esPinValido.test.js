import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/esPinValido.js';

describe('esPinValido', () => {
  describe('PIN válidos', () => {
    it.each(['1234', '123456', '0123', '000001', '1112', '121212'])(
      'acepta "%s"',
      (pin) => {
        expect(esPinValido(pin)).toBe(true);
      }
    );

    it('conserva los ceros iniciales', () => {
      expect(esPinValido('0123')).toBe(true);
      expect(esPinValido('000001')).toBe(true);
    });
  });

  describe('longitud incorrecta', () => {
    it.each(['', '1', '123', '12345', '1234567', '12345678'])(
      'rechaza "%s"',
      (pin) => {
        expect(esPinValido(pin)).toBe(false);
      }
    );
  });

  describe('todos los dígitos iguales', () => {
    it.each(['1111', '0000', '888888', '000000', '999999'])(
      'rechaza "%s"',
      (pin) => {
        expect(esPinValido(pin)).toBe(false);
      }
    );
  });

  describe('caracteres no permitidos', () => {
    it.each([
      ['una letra', '12a4'],
      ['un espacio inicial', ' 1234'],
      ['un espacio final', '1234 '],
      ['un espacio intermedio', '12 34'],
      ['un signo más', '+123'],
      ['un signo menos', '-123'],
      ['un guion separador', '12-34'],
      ['un punto', '1.234'],
      ['un salto de línea final', '1234\n'],
      ['dígitos árabes no ASCII', '١٢٣٤'],
      ['dígitos de ancho completo', '１２３４'],
    ])('rechaza un PIN con %s', (_descripcion, pin) => {
      expect(esPinValido(pin)).toBe(false);
    });
  });

  describe('tipos incorrectos', () => {
    it.each([
      ['null', null],
      ['undefined', undefined],
      ['un número de 4 cifras', 1234],
      ['un número de 6 cifras', 123456],
      ['un booleano', true],
      ['un array de caracteres', ['1', '2', '3', '4']],
      ['un objeto', {}],
      ['NaN', NaN],
      ['un BigInt', 1234n],
    ])('devuelve false con %s', (_descripcion, entrada) => {
      expect(esPinValido(entrada)).toBe(false);
    });

    it('nunca lanza excepciones', () => {
      expect(() => esPinValido(Symbol('pin'))).not.toThrow();
      expect(esPinValido(Symbol('pin'))).toBe(false);
    });
  });
});