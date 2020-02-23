//https://makecode.microbit.org/_hyxhitdo4AKt

let BLUE = 0
let GREEN = 0
let RED = 0
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function() {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})