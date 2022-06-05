function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

const ifLower = "I can\'t hear you!"
const ifUpper = "YES INDEED!"
const wdLoveTo = "I would love to!"

function sayHiToHeadphonedRoommate(string) {  
    if (string === string.toLowerCase()){
        return ifLower
    } else if (string === string.toUpperCase()) {
        return ifUpper
    } else if (string === "Let\'s have dinner together!" ) {
        return wdLoveTo
    }
}