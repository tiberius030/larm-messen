input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
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
    if (Schneiler > Okamsen_vs_Schneiler) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
})
