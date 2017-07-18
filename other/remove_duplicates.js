// remove duplicates from an array

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
    // TODO
}

const input = [5, 5, 6, 7, 1, 1, 4, 2, 2]
const output = removeDuplicates(input)

console.log(output)