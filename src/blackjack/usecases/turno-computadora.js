import { pedirCarta  } from './pedir-carta';   
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';
import { determinarGanador } from './determinar-ganador';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<Element>} divCartasJugadores - Arreglo de nodos elementos
 */

export const turnoComputadora = ( puntosMinimos , deck, puntosJugadores, divCartasJugadores ) => {

    if ( !puntosMinimos ) throw new Error( 'PuntosMinimos son necesarios');

    let puntosComputadora = 0; 

    do {
        const carta  = pedirCarta( deck );
        
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores );

    } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21) );

    determinarGanador( puntosJugadores );

};
