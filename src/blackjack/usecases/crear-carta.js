/**
 * Esta función crea la carta visualmente
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Element>} divCartasJugadores 
 */

export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = `${carta}`;
    divCartasJugadores[turno].append( imgCarta );
};
