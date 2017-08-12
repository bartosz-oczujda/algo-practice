/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the words in-place. ↴

Since strings in JavaScript are immutable ↴ , we'll first convert the string into an array of characters, do the in-place word reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're comfortable coding in a language with mutable strings, that'd be even better!
*/

const reverseWord = (array, startIndex, endIndex) => {
    
    const steps = Math.floor((endIndex - startIndex + 1) / 2);

    for(let i = 0; i < steps; i++) {
        
        const firstCharIndex = startIndex + i;
        const lastCharIndex = endIndex - i;
        const swapChar = array[lastCharIndex];
        
        array[lastCharIndex] = array[firstCharIndex];
        array[firstCharIndex] = swapChar;

    }
    
    return array;

}

const reverseString = (string) => {

    let array = string.split('');
    array = reverseWord(array, 0, array.length - 1);
    
    let charIndex = 0;    

    for(let i = 0; i <= array.length; i++) {

        if(array[i] === ' ' || i === array.length) {

            array = reverseWord(array, charIndex, i - 1);
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
