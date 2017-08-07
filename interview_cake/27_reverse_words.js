const reverseString = (string) => {
    
    let array = string.split('');
    const midpoint = Math.floor(array.length / 2);

    for(let i = 0; i < midpoint; i++) {
        
        const swapIndex = array.length - i - 1;
        const swapChar = array[swapIndex];
        
        array[swapIndex] = array[i];
        array[i] = swapChar;

    }

    return array.join('');

}

const result = reverseString('hilfe');
console.log(result);
