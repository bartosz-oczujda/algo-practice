`In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.

For example:

my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

print merge_lists(my_list, alices_list)
# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]`

const mergeArrays = (l1, l2) => {

    const merge = (l1, l2, acc) => {

        const [head1, ...tail1] = l1
        const [head2, ...tail2] = l2

        if(l1.length === 0) {
            acc = [...acc, ...l2]
            return acc
        }

        if(l2.length === 0) {
            acc = [...acc, ...l1]
            return acc
        }

        if(head1 > head2) {
            acc.push(head2)
            return merge(l1, tail2, acc)
        }
        else {
            acc.push(head1)
            return merge(tail1, l2, acc)
        }

    }

    const result = merge(l1, l2, [])
    return result

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
