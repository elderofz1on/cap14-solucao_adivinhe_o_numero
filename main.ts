/**
 * Na pág. 216 item 6, nossa sugestão é utilizar o bloco NO LOGOTIPO PRESSIONADO. Caso você esteja utilizando a micro:bit v1, esta funcionalidade não estará disponível, então você pode substituir NO LOGOTIPO PRESSIONADO pelo bloco EM AGITAR.
 */
function adivinhar_numero () {
    tentativas += 1
    palpite = Math.round((de + ate) / 2)
    basic.showNumber(palpite)
    basic.showString("?")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    de = 1
    ate = 100
    tentativas = 0
    basic.showString("#?")
    adivinhar_numero()
})
input.onButtonPressed(Button.A, function () {
    ate = palpite - 1
    adivinhar_numero()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(tentativas)
    basic.showString("tentativas")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    de = palpite + 1
    adivinhar_numero()
})
let palpite = 0
let tentativas = 0
let ate = 0
let de = 0
de = 1
ate = 100
tentativas = 0
basic.showString("#?")
adivinhar_numero()
