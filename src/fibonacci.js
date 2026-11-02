const N_MAXIMO = 78;
const MENSAJE_ERROR = 'solo números enteros entre 0 y 78';

export function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0 || n > N_MAXIMO) {
    throw new RangeError(MENSAJE_ERROR);
  }

  let anterior = 0;
  let actual = 1;
  for (let i = 0; i < n; i++) {
    [anterior, actual] = [actual, anterior + actual];
  }
  return anterior;
}