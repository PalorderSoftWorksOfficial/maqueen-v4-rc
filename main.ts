// Typescript syntax is ass
radio.onReceivedString(function (msg) {
    if (msg == "forward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        datalogger.log(datalogger.createCV("forward", 255))
    } else if (msg == "left") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (msg == "right") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (msg == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (msg.substr(0, 4) == "msg:") {
        basic.showString(msg.substr(4))
    } else if (msg == "battery") {
        radio.sendNumber(Maqueen_V5.getBatteryData(Maqueen_V5.BatteryType.Alkaline))
    } else if (msg == "P1") {
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (msg == "P2") {
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (msg == "backwards") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        datalogger.log(datalogger.createCV("forward", -255))
        datalogger.log(datalogger.createCV("backwards", 255))
    }
})
radio.setGroup(1)
datalogger.mirrorToSerial(true)
serial.writeString("initiated!")
