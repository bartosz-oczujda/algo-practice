const reverseWord = (array, wordBounds) => {
    
    wordBounds = wordBounds || [0, array.length - 1];
    const midpoint = Math.floor(wordBounds[0] + wordBounds[1] / 2);

    for(let i = 0; i < midpoint; i++) {
        
        const swapIndex = array.length - i - 1;
        const swapChar = array[swapIndex];
        
        array[swapIndex] = array[i];
        array[i] = swapChar;

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

const result = reverseString('you help i can');
console.log(result);
