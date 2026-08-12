radio.onReceivedValue(function (name, value) {
    if (name == GOOD_KEY) {
        basic.showString("OK")
        basic.showNumber(value)
    } else {
        basic.showString("NO")
    }
})
let GOOD_KEY = ""
let RADIO_GROUP = 23
GOOD_KEY = "N1K246"
radio.setGroup(RADIO_GROUP)
