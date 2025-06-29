/**
 * Esta función sirve para obtener el valor de la carta
 * @param {String} carta  - El valor de la carta
 * @returns {Number} - Retorna el valor de la carta
 */

const valorCarta = ( carta ) => {

    if ( carta.length === 0 ) throw new Error('Se requiere la carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ? (valor === 'A') ? 11 : 10 : valor * 1;  
};

export default valorCarta;