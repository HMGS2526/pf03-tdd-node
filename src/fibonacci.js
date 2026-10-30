export function fibonacci(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0 || n > 78) {
    throw new RangeError('solo números enteros entre 0 y 78');
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }
  return b;
}