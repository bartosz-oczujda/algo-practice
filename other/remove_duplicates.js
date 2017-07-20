// remove duplicates from an array
const input = [5, 5, 5, 6, 7, 1, 1, 4, 2, 2]

const removeDuplicates = (arr) => {

    let hash = new Map()
    let newArr = []

    for(val of arr) {
        hash.set(val, true)
    }

    for([key, val] of hash) {
        newArr.push(key)
    }

    return newArr;

} 


const removeDuplicatesRecursive = (arr) => {
    
    if (arr.length === 0) {
        return arr
    }

    const [head, ...tail] = arr
    const filteredTail = tail.filter( (item) => item !== head ) 

    return [head, ...removeDuplicatesRecursive(filteredTail)]

}

const output = removeDuplicates(input)
console.log(output)

const outputRecursive = removeDuplicatesRecursive(input)
console.log(outputRecursive)
