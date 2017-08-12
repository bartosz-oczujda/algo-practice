const reverseWord = (array, wordBounds) => {
    
    const steps = Math.floor((wordBounds[1] - wordBounds[0] + 1) / 2);

    for(let i = 0; i < steps; i++) {
        
        const swapIndex = wordBounds[0] + i;
        const lastSwapIndex = wordBounds[1] - i;
        const swapChar = array[lastSwapIndex];
        
        array[lastSwapIndex] = array[swapIndex];
        array[swapIndex] = swapChar;

    }
    
    return array;

}

const reverseString = (string) => {

    let array = string.split('');
    array = reverseWord(array, [0, array.length - 1]);
    
    let charIndex = 0;    

    for(let i = 0; i <= array.length; i++) {

        if(array[i] === ' ' || i === array.length) {

            array = reverseWord(array, [charIndex, i - 1]);
            charIndex = i + 1;

        }

    }

    return array.join('');
}

const fixtures = ['you help i can', 'bob there hi', 'cake eating am i']

fixtures.forEach((sentence) => {

    const result = reverseString(sentence);
    console.log(result);

});
