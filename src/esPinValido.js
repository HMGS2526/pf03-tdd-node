const LONGITUDES_VALIDAS = [4, 6];

const tieneLongitudValida = (pin) => LONGITUDES_VALIDAS.includes(pin.length);
const soloDigitos = (pin) => /^\d+$/.test(pin);
const todosIguales = (pin) => new Set(pin).size === 1;

export function esPinValido(pin) {
  return (
    typeof pin === 'string' &&
    tieneLongitudValida(pin) &&
    soloDigitos(pin) &&
    !todosIguales(pin)
  );
}