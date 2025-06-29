// Esta función determina quién gana
export const determinarGanador = ( puntosJugadores ) => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        ( puntosMinimos === puntosComputadora ) ? alert('Empataste') : ( puntosMinimos > 21) ? alert('¡Perdiste!') : ( puntosComputadora === 21 || puntosComputadora > puntosMinimos && puntosComputadora <= 21 ) ? alert('¡Perdiste!'): alert('¡Ganaste!');    
    }, 100 );
};
