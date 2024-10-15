class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    speak(sentence) {
        return sentence.split(' ').join(` ${this.sound} `) + ` ${this.sound}`;
    }
}

export default Animal;
