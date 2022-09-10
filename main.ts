function nastavitvzorykostek () {
    seznam = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    ]
}
function házetkostkami () {
    seznam[randint(2, 5)].showImage(0)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    hodnota_kostky = 0
    házetkostkami()
})
let hodnota_kostky = 0
let seznam: Image[] = []
nastavitvzorykostek()
házetkostkami()
