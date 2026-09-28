export function costCalculator(transaccion) {
    transaccion = Number(transaccion);

    return transaccion + 3 + (transaccion * 0.01);
}