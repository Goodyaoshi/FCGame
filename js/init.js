function touchDwon(evt) {
    nes.keyboard.keyDown({
        keyCode: evt.keyCode
    });
};

function touchUp(evt) {
    nes.keyboard.keyUp({
        keyCode: evt.keyCode
    });
};

function select(val) {
    if (val.substring(0, 1) == "#") {
        return document.querySelector(val);
    } else {
        return document.getElementById(val);
    }
}

var joystick = new Joystick({
    el: select("controls-rocker"),
    mode: 'static',
    color: "#808080",
    size: 150,
    isFourBtn: false,
    keyCodes: [87, 83, 65, 68],
    btn_down_fn: touchDwon,
    btn_up_fn: touchUp,
    relative: true,
});

joystick.init();
