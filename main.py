radio.set_group(0)
# Typescript syntax is ass

def on_received_string(name):
    if name == "forward":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    elif name == "left":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    elif name == "right":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    elif name == "stop":
        maqueen.motor_stop(maqueen.Motors.ALL)
radio.on_received_string(on_received_string)

def on_received_string2(msg):
    if msg.index_of("msg:"):
        # PX
        basic.show_string(msg.substr(4))
radio.on_received_string(on_received_string2)

def on_forever():
    pass
basic.forever(on_forever)
