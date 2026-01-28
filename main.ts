datalogger.mirrorToSerial(true)
serial.writeString("Initiated Receiving module,")

PacketLib.onReceivePacket(function (pkt) {
    let msg = PacketLib.bufferToString(pkt.payload)

    if (msg.substr(0, 4) == "msg:") {
        basic.showString(msg.substr(4))
        return
    }

    switch (msg) {
        case "forward":
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            datalogger.log(datalogger.createCV("forward", 255))
            break

        case "backwards":
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            datalogger.log(datalogger.createCV("forward", -255))
            datalogger.log(datalogger.createCV("backwards", 255))
            break

        case "left":
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            basic.pause(200)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            break

        case "right":
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            basic.pause(200)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            break

        case "stop":
            maqueen.motorStop(maqueen.Motors.All)
            break

        case "battery":
            let batteryLevel = Maqueen_V5.getBatteryData(Maqueen_V5.BatteryType.Alkaline)
            PacketLib.sendPacket(
                0,
                pins.createBufferFromArray([batteryLevel]),
                pkt.source,
                PacketLib.PacketFlags.None
            )
            break

        case "P1":
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(1500)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(1000)
            maqueen.motorStop(maqueen.Motors.All)
            break

        case "P2":
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(1500)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(1000)
            maqueen.motorStop(maqueen.Motors.All)
            break

        default:
            serial.writeLine("Unknown: " + msg)
            break
    }
})
