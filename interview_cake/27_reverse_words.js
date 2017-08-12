const reverseWord = (array, wordBounds) => {
    
    wordBounds = wordBounds || [0, array.length - 1];

    if(wordBounds[0] === wordBounds[1]) {
        
        return array;

    }

    const steps = Math.floor((wordBounds[1] - wordBounds[0] + 1) / 2);

    for(let i = 0; i < steps; i++) {
        
        const swapIndex = wordBounds[0] + i;
        const lastSwapIndex = wordBounds[1] - i;
        const swapChar = array[lastSwapIndex];
        
        array[lastSwapIndex] = array[swapIndex];
        array[swapIndex] = swapChar;

    }
console.log(wordBounds)
console.log(array)
    return array;

}


const getWordBounds = (array) => {

    const wordBounds = [];
    let lastSpaceIndex = -1;

    for(let i = 0; i < array.length; i++) {
        
        const char = array[i];

        if(char === ' ') {

            wordBounds.push([lastSpaceIndex + 1, i - 1]);
            lastSpaceIndex = i;

        }
        else if(i === array.length - 1) {

            wordBounds.push([lastSpaceIndex + 1, i]);

        }        

    }

    return wordBounds;

}

const reverseString = (string) => {

    let array = string.split('');
    array = reverseWord(array);
    
    const wordBounds = getWordBounds(array);
    console.log(wordBounds)

    for(let i = 0; i < wordBounds.length; i++) {

        array = reverseWord(array, wordBounds[i]);

    }

    return array.join('');
}

const fixtures = ['you help i can', 'bob there hi', 'cake eating am i']

fixtures.forEach((sentence) => {

    const result = reverseString(sentence);
    console.log(result);

});
