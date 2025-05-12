input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(CODO.grove_gesture_reads())
        basic.showNumber(CODO.grove_gesture_reads())
        basic.showNumber(CODO.grove_gesture_reads())
        basic.showNumber(CODO.grove_gesture_reads())
    }
})
let o = 0
hummingbird.startHummingbird()
basic.forever(function () {
    o = 5
    if (o) {
        Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 1)
        music.play(music.stringPlayable("- C C5 C B C A C ", 120), music.PlaybackMode.LoopingInBackground)
        Kitronik_IFF.motorOn(Kitronik_IFF.Motors.Motor1, Kitronik_IFF.MotorDirection.Forward, 100)
        hummingbird.setRotationServo(FourPort.One, 100)
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
        servos.P0.run(100)
        servos.P1.run(100)
        servos.P2.run(100)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
        basic.showNumber(o)
        o += 1
    }
    if (true) {
        Kitronik_Robotics_Board.allOff()
    }
})
