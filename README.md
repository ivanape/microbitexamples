# Microbit

Repositorio con ejemplos para la BBC Microbit (https://microbit.org/es/) y para Maqueen (https://wiki.dfrobot.com/micro:Maqueen_for_micro:bit_SKU:ROB0148-E(ROB0148)).

Para programar la microbit, se puede programar con editor de bloques, Javascript o Python. No es necesario realizar ninguna instalación en nuestro equipo (ni siquiera comprar una microbit dado que el editor incluye un simulador). Simplemente es necesario abrir un navegador y acceder a la URL https://makecode.microbit.org/.

Para comenzar se puede visualizar este vídeo de Youtube (https://www.youtube.com/watch?v=MY4jDrN9_cc), dado que es un gran recurso para una primera toma de contacto del flujo y entorno de trabajo.

En cada carpeta de los ejemplos hay dos ficheros:

- `.js`: con el código en Javascript listo para usar en el editor de código o bloques (https://makecode.microbit.org/).
- `.hex`: con el fichero para copiar y pegar en nuestra microbit una vez conectada a través del puerto USB en nuestro ordenador. Hay disponible una guía paso a paso en https://microbit.org/es/guide/quick/.


### Ejemplos Microbit

- 01-Piedra_Papel_Tijera: simulación del conocido juego Piedra/Papel/Tijera. Hay que agitar la microbit para que aparezaca de forma aleatoria una de las tres formas en el panel de la microbit.

- 02-Contador_de_pasos: simulador de un contador de pasos.

- 03-Dado: simulación de un dado. Hay que agitar la microbit para que aparezca un número de forma aletatoria.

- 04-Snap_the_Dot: en este juego una luz led se mueve de izquierda a derecha y empleando el pulsador `A` debemos indicar cuando está en el punto central. El juego se detendrá y saldrá el mensaje "Game Over" si nos equivocamos. Se puede reiniciar el juego pulsando `A` y `B` de forma simultánea.


### Ejemplos Maqueen

- 01-Detecta_Obstaculos: Maqueen se moverá e intentará evitar los obstáculos que puede encontrarse en su camino.

- 02-RGB-LED: este programa iluminará con una secuencia de colores la parte inferior del coche.

- 03-Distancia-Ultrasonidos: se muestra en el led de la microbit la distancia que separa el maqueen con objetos.


