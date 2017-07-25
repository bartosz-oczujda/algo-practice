/*
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

Bonus
In Ruby, sometimes expressions are surrounded by vertical bars, "|like this|". Extend your validator to validate vertical bars. Careful: there's no difference between the "opener" and "closer" in this case—they're the same character!

*/

const validateBrackets = (input) => {
    const openers = new Set(['[', '{', '('])
    const closers = new Set([']', '}', ')'])

    let openersToClosers = {
        '[':']',
        '{':'}',
        '(':')'
    }

    let characterStack = []

    for(char of input) {

        if(openers.has(char)) {

            characterStack.push(char)

        }
        else if(closers.has(char)) {
            
            if (characterStack.length === 0) {
                return false;
            }
            else {
                
            }
        }
        
    }

    console.log(characterStack)
    return characterStack.length === 0
}

const result = validateBrackets("{}")
console.log(result)