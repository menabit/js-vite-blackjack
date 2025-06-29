import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

// Patrón Modulo

const miModulo = (() => {

    'use strict' // Ayuda a que sea más limpio   
    /**
     * 2C = Two of Clubs (Tréboles)
     * 2D = Two of Diamonds (Diamantes)
     * 2H = Two of Hearts (Corazones)
     * 2S = Two of Spades (Espadas)
     */

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    // Esta función inicializa el juego     
    const inicializarJuego = ( numJugadores = 2) => {
        // console.clear();

        deck = crearDeck( tipos, especiales );

        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }
    
        puntosHTML.forEach(punto => punto.innerText = 0);
        divCartasJugadores.forEach(cartaJugador => cartaJugador.innerHTML = '');
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;   
    }; 

    // Eventos 
    btnPedir.addEventListener('click', () => {
        const carta  = pedirCarta( deck );
        const puntosJugador = acumularPuntos( carta, 0, puntosJugadores );

        crearCarta( carta, 0, divCartasJugadores );

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste...');
            btnPedir.disabled = true; 
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores );

        } else if ( puntosJugador === 21 ) {
            console.warn('¡21, genial!');
            btnPedir.disasbled = true; 
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores );
        }
        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] , deck, puntosJugadores, divCartasJugadores );
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();     
    });

    return { nuevoJuego: inicializarJuego };

})();