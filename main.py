def on_button_pressed_a():
    for index in range(4):
        basic.show_number(CODO.grove_gesture_reads())
        basic.show_number(CODO.grove_gesture_reads())
        basic.show_number(CODO.grove_gesture_reads())
        basic.show_number(CODO.grove_gesture_reads())
input.on_button_pressed(Button.A, on_button_pressed_a)

o = 0
hummingbird.start_hummingbird()

def on_forever():
    global o
    o = 5
    if o:
        Kitronik_ACCESSbit.buzzer_control(Kitronik_ACCESSbit.BuzzerLength.LONG, 1)
        music.play(music.string_playable("- C C5 C B C A C ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        Kitronik_IFF.motor_on(Kitronik_IFF.Motors.MOTOR1,
            Kitronik_IFF.MotorDirection.FORWARD,
            100)
        hummingbird.set_rotation_servo(FourPort.ONE, 100)
        servos.P0.run(100)
        servos.P1.run(100)
        kitronik_motor_driver.motor_on(kitronik_motor_driver.Motors.MOTOR2,
            kitronik_motor_driver.MotorDirection.FORWARD,
            100)
        basic.show_number(o)
        o += 1
    if True:
        Kitronik_Robotics_Board.all_off()
basic.forever(on_forever)
