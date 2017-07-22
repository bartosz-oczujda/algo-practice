// remove duplicates from an array
const input = [5, 5, 5, 6, 7, 1, 1, 4, 2, 2]

const removeDuplicates = (arr) => {

    let hash = new Map()
    let newArr = []

    for(val of arr) {
       
        if(hash.get(val) !== true) {
            hash.set(val, true)
            newArr.push(val)
        }

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
