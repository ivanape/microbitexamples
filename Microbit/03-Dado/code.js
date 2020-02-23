input.onGesture(Gesture.Shake, function() {
    step = Math.randomRange(1, 6)
    basic.showNumber(step)
})
let step = 0
basic.showNumber(step)