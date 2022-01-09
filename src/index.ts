class Thing {
    constructor() {}

    talk(): void {
        console.log('I am a thing');
    }
}

const thingOne = new Thing();

thingOne.talk();

const theDiv = document.getElementById('theDiv');
if (theDiv !== null) {
    theDiv.innerHTML = 'Added some text';
}
