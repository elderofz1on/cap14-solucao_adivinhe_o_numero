def adivinhar_numero():
    global tentativas, palpite
    tentativas += 1
    palpite = Math.round((de + ate) / 2)
    basic.show_number(palpite)
    basic.show_string("?")
    basic.show_leds("""
        . . . . .
                . # . # .
                # . . . #
                . # . # .
                . . . . .
    """)

def on_logo_pressed():
    global de, ate, tentativas
    de = 1
    ate = 100
    tentativas = 0
    basic.show_string("#?")
    adivinhar_numero()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    global ate
    ate = palpite - 1
    adivinhar_numero()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.clear_screen()
    basic.show_number(tentativas)
    basic.show_string("tentativas")
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global de
    de = palpite + 1
    adivinhar_numero()
input.on_button_pressed(Button.B, on_button_pressed_b)

palpite = 0
tentativas = 0
ate = 0
de = 0
de = 1
ate = 100
tentativas = 0
basic.show_string("#?")
adivinhar_numero()