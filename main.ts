// Typescript syntax is ass
radio.onReceivedString(function (name) {
    if (name == "forward") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (name == "left") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    } else if (name == "right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (name == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.onReceivedString(function(msg:string) {
    if (msg.substr(0, 4) == "msg:") {
        basic.showString(msg.substr(4))
    }
})
radio.setGroup(0)
basic.forever(function () {
	
})
