input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Okamsen_vs_Schneiler += -10
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(Okamsen_vs_Schneiler)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Okamsen_vs_Schneiler += 10
})
let Schneiler = 0
let Okamsen_vs_Schneiler = 0
Okamsen_vs_Schneiler = pins.digitalReadPin(DigitalPin.P3)
basic.showNumber(Okamsen_vs_Schneiler)
basic.forever(function () {
    Schneiler = pins.digitalReadPin(DigitalPin.P3)
})
