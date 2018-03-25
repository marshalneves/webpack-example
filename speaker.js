class Speaker {

    constructor(myName) {
        this.myName = myName;

    }

    say(any) {

        console.log(any);
    }

    sayName() {
        console.log(`Hello, my name is ${this.myName}`);
    }

}

const S = new Speaker('Jhon');
exports.speaker = S;