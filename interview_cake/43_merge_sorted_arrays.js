`In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.

For example:

my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

print merge_lists(my_list, alices_list)
# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]`

const mergeArrays = (l1, l2) => {

    if(l1.length === 0) return l2
    if(l2.length === 0) return l1

    let mergedArray = []
    let length = Math.max((l1.length + l2.length) / 2)
    let currentIndex = 0
   
    for(let i = 0; i < length; i++) {
        let headOfFirst = l1[i]
        let headOfSecond = l2[i]

        if(headOfFirst < headOfSecond) {
            higher = headOfFirst
            lower = headOfSecond
        }
        else {
            higher = headOfSecond
            lower = headOfFirst
        }

        if(higher !== 'undefined') {
            mergedArray[currentIndex] = higher
        }

        if(lower !== 'undefined') {
            mergedArray[++currentIndex] = lower
        }
        else {
            mergedArray[currentIndex] = lower
        }
        
        ++currentIndex
    }

    return mergedArray
}

const list1 = [1, 3, 7, 9]
const list2 = [2, 5, 8, 11]
const mergedLists = mergeArrays(list1, list2)
console.log(mergedLists)

const edgeCase1 = mergeArrays([], [1, 3])
console.log(edgeCase1)

const edgeCase2 = mergeArrays([1], [2, 3, 4])
console.log(edgeCase2)
