const selectionSort = (array) => {

    const findMinimum = (start, array) => {

        let min = array[start];
        let minIndex = 0;

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

    }   

    return array;
 
}

const array = [4,9,7,1,3,6,5];
const result = selectionSort(array);

console.log(result); 
