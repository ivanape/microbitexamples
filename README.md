# microbitexamples

Repositorio con ejemplos para la BBC Microbit (https://microbit.org/es/) y para Maqueen (https://wiki.dfrobot.com/micro:Maqueen_for_micro:bit_SKU:ROB0148-E(ROB0148)).

## Microbit

BBC micro: bit es una pequeña tarjeta programable de tan solo 4x5 cm diseñada para que aprender a programar sea fácil, divertido y al alcance de todos. Tiene un entorno de programación gráfico propio: MakeCode de Microsoft, un sencillo editor gráfico online muy potente. También se puede programar con JavaScript, Python y Scratch (añadiendo una extensión). 

Gracias a la gran cantidad de sensores que incorpora, sólo con la tarjeta se pueden llevar a cabo centenares de proyectos. BBC micro: bit también es una plataforma IoT (Internet of Things), lo que la hace muy interesante para usuarios avanzados. Y es Open Source, por supuesto. Tanto el hardware como el software de “micro:bit” es de código abierto.

Tiene un entorno de programación gráfico propio: MakeCode de Microsoft, un sencillo editor gráfico online muy potente y gratuito que posibilita introducirnos en el mundo de la programación de forma intuitiva a través del lenguaje de programación visual o de bloques. Con él aprendemos a pensar como un programador sin caer en los molestos errores de sintaxis. Se puede programar con editor de bloques, Javascript o Python. No es necesario realizar ninguna instalación en nuestro equipo (ni siquiera comprar una microbit dado que el editor incluye un simulador). Simplemente es necesario abrir un navegador y acceder a la URL https://makecode.microbit.org/.

Características:

- Microcontrolador ARM Cortex-M0
- Radio Bluetooth Nordic nRF51
- 25 LEDs programables individualmente
- 2 botones programables
- Pines de entrada y salida
- Sensor de Luz y Temperatura
- Sensores de movimiento (acelerómetro y brújula)
- Comunicación inalámbrica, vía Radio y Bluetooth
- USB y Conector para batería externa

Para comenzar se puede visualizar este vídeo de Youtube (https://www.youtube.com/watch?v=MY4jDrN9_cc), dado que es un gran recurso para una primera toma de contacto del flujo y entorno de trabajo.

## Maqueen

Es un robot de programación gráfica para educación STEM diseñado para BBC micro: bit. Su chasis es plug and play y permite a los niños aprender rápidamente programación gráfica para entretener y fomentar el interés de los niños en la ciencia y el pensamiento lógico. Viene totalmente montado a falta de conectar las ruedas y las pilas, por lo tanto no es necesario soldar y se puede poner a funcionar en pocos minutos con los códigos de ejemplo. Es necesario pinchar una placa BB micro:bit (no incluida) para poder utilizar el robot. La misma placa también ofrecerá la posibilidad de usar sus diversos sensores e inventar diferentes juegos. Se programa directamente con el entorno visual Makecode de Microsoft. Es adecuado para niños con edad a partir de 8 Años.

Maqueen puede hacer muchas cosas, como seguir líneas, seguir la luz, evitar objetos y mucho más. Es totalmente programable y muy pequeño para poder llevarlo a cualquier sitio o para usar en clases educativas.

Características:

- Alimentación: 3.5V a 5V DC ( Necesita 3 pilas AAA - No incluidas )
- 2 Sensores de infrarrojo
- 1 Zumbador
- Receptor infrarrojo (NEC decoder)
- 2 Luces LED programables
- 4 LEDs RGB programables
- Sensor de distancia SR04
- Conector I2C para expansiones
- 2 motores N20 metálicos con reductora de 1:150
- Máxima revoluciones: 133 RPM
- Control de motores variable por PWM
- Funda protectora para lo smotores con tonrillos M3
- Programación: Entorno gráfico Makecode

Se puede ver un vídeo introductorio a Maqueen en https://youtu.be/vdb6pQ6VJrQ.

## Ejemplos incluidos en el repositorio

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


