// Typescript syntax is ass
radio.onReceivedString(function (name) {
    if (name == "forward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (name == "left") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else if (name == "right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (name == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.onReceivedString(function(msg:string) {
    if (msg.substr(0, 4) == "msg:") {
        basic.showString(msg.substr(4))
    }
})
})
