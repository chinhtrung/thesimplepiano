// The data is passed from seeds.js (see the implementation at home.ejs)

var lastEvent;
var heldKeys = {};

function selectCapsLock(status) {
    if (status) {
        document.querySelector("#CapsLock").classList.add("selected");
    } else {
        document.querySelector("#CapsLock").classList.remove("selected");
    }
}

document.onkeydown = function (e) {
    if (lastEvent && lastEvent.key == e.key) {
        return;
    }
    
    let keyOnKeyboard = document.querySelector("#" + e.code);

    lastEvent = e;
    heldKeys[e.key] = true;

    keyOnKeyboard.classList.add("selected");
    selectCapsLock(e.getModifierState("CapsLock"));

    if (keyData[e.key]) {
        let note = document.querySelector(keyData[e.key].piaKeyClass);
        keyData[e.key].sound.play();
        note.classList.add(keyData[e.key].piaKeyPressClass);
    }

    if (e.code === "Tab") {
        return false;
    }

    if (e.code === "Space") {
        Howler.stop();
        return false;
    }
};

document.onkeyup = function (e) {
    let keyOnKeyboard = document.querySelector("#" + e.code);
    lastEvent = null;
    heldKeys[e.key] = false;

    if (e.key === "CapsLock") {
        return;
    }

    if (keyData[e.key]) {
        let note = document.querySelector(keyData[e.key].piaKeyClass);
        note.classList.remove(keyData[e.key].piaKeyPressClass);
    }

    keyOnKeyboard.classList.remove("selected");

    if (e.code === "Space") {
        return false;
    }
}

function addEventNote() {
    let shiftLeft = document.querySelector("#ShiftLeft");

    for (let each in keyData) {
        try {
            let note = document.querySelector(keyData[each].piaKeyClass);
            let codeKey = document.querySelector("#" + keyData[each].code);
            let isShifted = keyData[each].piaKeyPressClass === "black-press"? true : false;
            
            note.addEventListener("mousedown", (e) => {
                keyData[each].sound.play();
                note.classList.add(keyData[each].piaKeyPressClass);
                codeKey.classList.add("selected");
                if (isShifted) {
                    shiftLeft.classList.add("selected");
                }
            });

            let removeKeys = () => {
                codeKey.classList.remove("selected");
                shiftLeft.classList.remove("selected");
            }

            note.addEventListener("mouseup", (e) => {
                note.classList.remove(keyData[each].piaKeyPressClass);
                removeKeys();
            });
            note.addEventListener("mouseleave", (e) => {
                note.classList.remove(keyData[each].piaKeyPressClass);
                removeKeys();
            });
        } catch (err) {
            console.log("err ", err);
        }
    }
}

window.onload = function () {
    addEventNote();
}
