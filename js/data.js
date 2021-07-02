var uiowaPath = "src/pianoSounds/uiowa/m4a_format/";

var keyData = {
    "`" : {
        sound: new Howl({
            src: [uiowaPath + "C2.m4a"]
        }),
        piaKeyClass: ".white.C.octave2",
        piaKeyPressClass: "white-press",
        code: "Backquote"
    },
    "~" : {
        sound: new Howl({
            src: [uiowaPath + "Db2.m4a"]
        }),
        piaKeyClass: ".black.Db.octave2",
        piaKeyPressClass: "black-press",
        code: "Backquote"
    },
    "1" : {
        sound: new Howl({
            src: [uiowaPath + "D2.m4a"]
        }),
        piaKeyClass: ".white.D.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit1"
    },
    "!" : {
        sound: new Howl({
            src: [uiowaPath + "Eb2.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave2",
        piaKeyPressClass: "black-press",
        code: "Digit1"
    },
    "2" : {
        sound: new Howl({
            src: [uiowaPath + "E2.m4a"]
        }),
        piaKeyClass: ".white.E.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit2"
    },
    // "@" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F2.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave2",
    //     piaKeyPressClass: "white-press",
    //     code: "Digit2"
    // },
    "3" : {
        sound: new Howl({
            src: [uiowaPath + "F2.m4a"]
        }),
        piaKeyClass: ".white.F.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit3"
    },
    "#" : {
        sound: new Howl({
            src: [uiowaPath + "Gb2.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave2",
        piaKeyPressClass: "black-press",
        code: "Digit3"
    },
    "4" : {
        sound: new Howl({
            src: [uiowaPath + "G2.m4a"]
        }),
        piaKeyClass: ".white.G.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit4"
    },
    "$" : {
        sound: new Howl({
            src: [uiowaPath + "Ab2.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave2",
        piaKeyPressClass: "black-press",
        code: "Digit4"
    },
    "5" : {
        sound: new Howl({
            src: [uiowaPath + "A2.m4a"]
        }),
        piaKeyClass: ".white.A.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit5"
    },
    "%" : {
        sound: new Howl({
            src: [uiowaPath + "Bb2.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave2",
        piaKeyPressClass: "black-press",
        code: "Digit5"
    },
    "6" : {
        sound: new Howl({
            src: [uiowaPath + "B2.m4a"]
        }),
        piaKeyClass: ".white.B.octave2",
        piaKeyPressClass: "white-press",
        code: "Digit6"
    },
    // "^" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "C3.m4a"]
    //     }),
    //     piaKeyClass: ".white.C.octave3",
    //     piaKeyPressClass: "white-press",
    //     code: "Digit6"
    // },
    "q" : {
        sound: new Howl({
            src: [uiowaPath + "C3.m4a"]
        }),
        piaKeyClass: ".white.C.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyQ"
    },
    "Q" : {
        sound: new Howl({
            src: [uiowaPath + "Db3.m4a"]
        }),
        piaKeyClass: ".black.Db.octave3",
        piaKeyPressClass: "black-press",
        code: "KeyQ"
    },
    "w" : {
        sound: new Howl({
            src: [uiowaPath + "D3.m4a"]
        }),
        piaKeyClass: ".white.D.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyW"
    },
    "W" : {
        sound: new Howl({
            src: [uiowaPath + "Eb3.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave3",
        piaKeyPressClass: "black-press",
        code: "KeyW"
    },
    "e" : {
        sound: new Howl({
            src: [uiowaPath + "E3.m4a"]
        }),
        piaKeyClass: ".white.E.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyE"
    },
    // "E" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F3.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave3",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyE"
    // },
    "r" : {
        sound: new Howl({
            src: [uiowaPath + "F3.m4a"]
        }),
        piaKeyClass: ".white.F.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyR"
    },
    "R" : {
        sound: new Howl({
            src: [uiowaPath + "Gb3.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave3",
        piaKeyPressClass: "black-press",
        code: "KeyR"
    },
    "t" : {
        sound: new Howl({
            src: [uiowaPath + "G3.m4a"]
        }),
        piaKeyClass: ".white.G.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyT"
    },
    "T" : {
        sound: new Howl({
            src: [uiowaPath + "Ab3.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave3",
        piaKeyPressClass: "black-press",
        code: "KeyT"
    },
    "a" : {
        sound: new Howl({
            src: [uiowaPath + "A3.m4a"]
        }),
        piaKeyClass: ".white.A.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyA"
    },
    "A" : {
        sound: new Howl({
            src: [uiowaPath + "Bb3.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave3",
        piaKeyPressClass: "black-press",
        code: "KeyA"
    },
    "s" : {
        sound: new Howl({
            src: [uiowaPath + "B3.m4a"]
        }),
        piaKeyClass: ".white.B.octave3",
        piaKeyPressClass: "white-press",
        code: "KeyS"
    },
    // "S" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "C4.m4a"]
    //     }),
    //     piaKeyClass: ".white.C.octave4",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyS"
    // },
    "d" : {
        sound: new Howl({
            src: [uiowaPath + "C4.m4a"]
        }),
        piaKeyClass: ".white.C.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyD"
    },
    "D" : {
        sound: new Howl({
            src: [uiowaPath + "Db4.m4a"]
        }),
        piaKeyClass: ".black.Db.octave4",
        piaKeyPressClass: "black-press",
        code: "KeyD"
    },
    "f" : {
        sound: new Howl({
            src: [uiowaPath + "D4.m4a"]
        }),
        piaKeyClass: ".white.D.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyF"
    },
    "F" : {
        sound: new Howl({
            src: [uiowaPath + "Eb4.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave4",
        piaKeyPressClass: "black-press",
        code: "KeyF"
    },
    "g" : {
        sound: new Howl({
            src: [uiowaPath + "E4.m4a"]
        }),
        piaKeyClass: ".white.E.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyG"
    },
    // "G" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F4.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave4",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyG"
    // },
    "z" : {
        sound: new Howl({
            src: [uiowaPath + "F4.m4a"]
        }),
        piaKeyClass: ".white.F.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyZ"
    },
    "Z" : {
        sound: new Howl({
            src: [uiowaPath + "Gb4.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave4",
        piaKeyPressClass: "black-press",
        code: "KeyZ"
    },
    "x" : {
        sound: new Howl({
            src: [uiowaPath + "G4.m4a"]
        }),
        piaKeyClass: ".white.G.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyX"
    },
    "X" : {
        sound: new Howl({
            src: [uiowaPath + "Ab4.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave4",
        piaKeyPressClass: "black-press",
        code: "KeyX"
    },
    "c" : {
        sound: new Howl({
            src: [uiowaPath + "A4.m4a"]
        }),
        piaKeyClass: ".white.A.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyC"
    },
    "C" : {
        sound: new Howl({
            src: [uiowaPath + "Bb4.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave4",
        piaKeyPressClass: "black-press",
        code: "KeyC"
    },
    "v" : {
        sound: new Howl({
            src: [uiowaPath + "B4.m4a"]
        }),
        piaKeyClass: ".white.B.octave4",
        piaKeyPressClass: "white-press",
        code: "KeyV"
    },
    // "V" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "C5.m4a"]
    //     }),
    //     piaKeyClass: ".white.C.octave5",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyV"
    // },
    "b" : {
        sound: new Howl({
            src: [uiowaPath + "C5.m4a"]
        }),
        piaKeyClass: ".white.C.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyB"
    },
    "B" : {
        sound: new Howl({
            src: [uiowaPath + "Db5.m4a"]
        }),
        piaKeyClass: ".black.Db.octave5",
        piaKeyPressClass: "black-press",
        code: "KeyB"
    },
    "n" : {
        sound: new Howl({
            src: [uiowaPath + "D5.m4a"]
        }),
        piaKeyClass: ".white.D.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyN"
    },
    "N" : {
        sound: new Howl({
            src: [uiowaPath + "Eb5.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave5",
        piaKeyPressClass: "black-press",
        code: "KeyN"
    },
    "m" : {
        sound: new Howl({
            src: [uiowaPath + "E5.m4a"]
        }),
        piaKeyClass: ".white.E.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyM"
    },
    // "M" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F5.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave5",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyM"
    // },
    "h" : {
        sound: new Howl({
            src: [uiowaPath + "F5.m4a"]
        }),
        piaKeyClass: ".white.F.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyH"
    },
    "H" : {
        sound: new Howl({
            src: [uiowaPath + "Gb5.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave5",
        piaKeyPressClass: "black-press",
        code: "KeyH"
    },
    "j" : {
        sound: new Howl({
            src: [uiowaPath + "G5.m4a"]
        }),
        piaKeyClass: ".white.G.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyJ"
    },
    "J" : {
        sound: new Howl({
            src: [uiowaPath + "Ab5.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave5",
        piaKeyPressClass: "black-press",
        code: "KeyJ"
    },
    "k" : {
        sound: new Howl({
            src: [uiowaPath + "A5.m4a"]
        }),
        piaKeyClass: ".white.A.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyK"
    },
    "K" : {
        sound: new Howl({
            src: [uiowaPath + "Bb5.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave5",
        piaKeyPressClass: "black-press",
        code: "KeyK"
    },
    "l" : {
        sound: new Howl({
            src: [uiowaPath + "B5.m4a"]
        }),
        piaKeyClass: ".white.B.octave5",
        piaKeyPressClass: "white-press",
        code: "KeyL"
    },
    // "L" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "C6.m4a"]
    //     }),
    //     piaKeyClass: ".white.C.octave6",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyL"
    // },
    "y" : {
        sound: new Howl({
            src: [uiowaPath + "C6.m4a"]
        }),
        piaKeyClass: ".white.C.octave6",
        piaKeyPressClass: "white-press",
        code: "KeyY"
    },
    "Y" : {
        sound: new Howl({
            src: [uiowaPath + "Db6.m4a"]
        }),
        piaKeyClass: ".black.Db.octave6",
        piaKeyPressClass: "black-press",
        code: "KeyY"
    },
    "u" : {
        sound: new Howl({
            src: [uiowaPath + "D6.m4a"]
        }),
        piaKeyClass: ".white.D.octave6",
        piaKeyPressClass: "white-press",
        code: "KeyU"
    },
    "U" : {
        sound: new Howl({
            src: [uiowaPath + "Eb6.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave6",
        piaKeyPressClass: "black-press",
        code: "KeyU"
    },
    "i" : {
        sound: new Howl({
            src: [uiowaPath + "E6.m4a"]
        }),
        piaKeyClass: ".white.E.octave6",
        piaKeyPressClass: "white-press",
        code: "KeyI"
    },
    // "I" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F6.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave6",
    //     piaKeyPressClass: "white-press",
    //     code: "KeyI"
    // },
    "o" : {
        sound: new Howl({
            src: [uiowaPath + "F6.m4a"]
        }),
        piaKeyClass: ".white.F.octave6",
        piaKeyPressClass: "white-press",
        code: "KeyO"
    },
    "O" : {
        sound: new Howl({
            src: [uiowaPath + "Gb6.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave6",
        piaKeyPressClass: "black-press",
        code: "KeyO"
    },
    "p" : {
        sound: new Howl({
            src: [uiowaPath + "G6.m4a"]
        }),
        piaKeyClass: ".white.G.octave6",
        piaKeyPressClass: "white-press",
        code: "KeyP"
    },
    "P" : {
        sound: new Howl({
            src: [uiowaPath + "Ab6.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave6",
        piaKeyPressClass: "black-press",
        code: "KeyP"
    },
    "[" : {
        sound: new Howl({
            src: [uiowaPath + "A6.m4a"]
        }),
        piaKeyClass: ".white.A.octave6",
        piaKeyPressClass: "white-press",
        code: "BracketLeft"
    },
    "{" : {
        sound: new Howl({
            src: [uiowaPath + "Bb6.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave6",
        piaKeyPressClass: "black-press",
        code: "BracketLeft"
    },
    "]" : {
        sound: new Howl({
            src: [uiowaPath + "B6.m4a"]
        }),
        piaKeyClass: ".white.B.octave6",
        piaKeyPressClass: "white-press",
        code: "BracketRight"
    },
    // "}" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "C7.m4a"]
    //     }),
    //     piaKeyClass: ".white.C.octave7",
    //     piaKeyPressClass: "white-press",
    //     code: "BracketRight"
    // },
    "7" : {
        sound: new Howl({
            src: [uiowaPath + "C7.m4a"]
        }),
        piaKeyClass: ".white.C.octave7",
        piaKeyPressClass: "white-press",
        code: "Digit7"
    },
    "&" : {
        sound: new Howl({
            src: [uiowaPath + "Db7.m4a"]
        }),
        piaKeyClass: ".black.Db.octave7",
        piaKeyPressClass: "black-press",
        code: "Digit7"
    },
    "8" : {
        sound: new Howl({
            src: [uiowaPath + "D7.m4a"]
        }),
        piaKeyClass: ".white.D.octave7",
        piaKeyPressClass: "white-press",
        code: "Digit8"
    },
    "*" : {
        sound: new Howl({
            src: [uiowaPath + "Eb7.m4a"]
        }),
        piaKeyClass: ".black.Eb.octave7",
        piaKeyPressClass: "black-press",
        code: "Digit8"
    },
    "9" : {
        sound: new Howl({
            src: [uiowaPath + "E7.m4a"]
        }),
        piaKeyClass: ".white.E.octave7",
        piaKeyPressClass: "white-press",
        code: "Digit9"
    },
    // "(" : {
    //     sound: new Howl({
    //         src: [uiowaPath + "F7.m4a"]
    //     }),
    //     piaKeyClass: ".white.F.octave7",
    //     piaKeyPressClass: "white-press",
    //     code: "Digit9"
    // },
    "0" : {
        sound: new Howl({
            src: [uiowaPath + "F7.m4a"]
        }),
        piaKeyClass: ".white.F.octave7",
        piaKeyPressClass: "white-press",
        code: "Digit0"
    },
    ")" : {
        sound: new Howl({
            src: [uiowaPath + "Gb7.m4a"]
        }),
        piaKeyClass: ".black.Gb.octave7",
        piaKeyPressClass: "black-press",
        code: "Digit0"
    },
    "-" : {
        sound: new Howl({
            src: [uiowaPath + "G7.m4a"]
        }),
        piaKeyClass: ".white.G.octave7",
        piaKeyPressClass: "white-press",
        code: "Minus"
    },
    "_" : {
        sound: new Howl({
            src: [uiowaPath + "Ab7.m4a"]
        }),
        piaKeyClass: ".black.Ab.octave7",
        piaKeyPressClass: "black-press",
        code: "Minus"
    },
    "=" : {
        sound: new Howl({
            src: [uiowaPath + "A7.m4a"]
        }),
        piaKeyClass: ".white.A.octave7",
        piaKeyPressClass: "white-press",
        code: "Equal"
    },
    "+" : {
        sound: new Howl({
            src: [uiowaPath + "Bb7.m4a"]
        }),
        piaKeyClass: ".black.Bb.octave7",
        piaKeyPressClass: "black-press",
        code: "Equal"
    },
    "Backspace" : {
        sound: new Howl({
            src: [uiowaPath + "B7.m4a"]
        }),
        piaKeyClass: ".white.B.octave7",
        piaKeyPressClass: "white-press",
        code: "Backspace"
    },
}
