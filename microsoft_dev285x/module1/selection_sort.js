const selectionSort = (array) => {

    const findMinimum = (start, array) => {

        let min = array[start];
        let minIndex = start;

        for(let i = start; i < array.length; i++) {

            if(min > array[i]) {

                min = array[i];
                minIndex = i;

            }

        }
        
        return minIndex;

    }

    for (let i = 0; i < array.length - 1; i++) {

        const minIndex = findMinimum(i, array);
        const temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
        console.log('step: ' + i, array)
    }   

    return array;
 
}

const array = [1,3,5,4,2,6];
const result = selectionSort(array);

console.log(result); 

const array2 = [4,9,7,1,3,6,5];
const result2 = selectionSort(array2);

console.log(result2);

const array3 = [7,3,5,9,1,4,2];
const result3 = selectionSort(array3);

console.log(result3);
