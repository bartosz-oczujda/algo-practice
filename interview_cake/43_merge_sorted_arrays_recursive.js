`In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.

For example:

my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

print merge_lists(my_list, alices_list)
# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]`

const mergeArrays = (l1, l2) => {

    const [head2, ...tail2] = l2
    
    if(l1.length === 0) {

        return l2

    }

    if(l2.length === 0) {

        return l1

    }

    if(head2 > l1[l1.length - 1]) {

        const newArr = [...l1, head2]
        return mergeArrays(newArr, tail2)

    }

    for (let i = 0; i < l1.length; i++) {
        
        if(head2 < l1[i]) {
            
            const newArr = [...l1]
            newArr.splice(i, 0, head2)
            
            return mergeArrays(newArr, tail2)

        }

    }

}

const list1 = [1, 2, 7, 9]
const list2 = [3, 4, 8, 11]
const mergedLists = mergeArrays(list1, list2)
console.log(mergedLists)

const shorterList = [1, 2]
const mergedWithShorter = mergeArrays(shorterList, list2)
console.log(mergedWithShorter)

const mergedWithEmpty = mergeArrays([], list2)
console.log(mergedWithEmpty)
