const bubbleSort = (array) => {

    let wasSwapped = true;

    while(wasSwapped) {

        wasSwapped = false;

        for(let i = 0; i < array.length - 1; i++) {

            if(array[i] > array[i + 1]) {

                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                wasSwapped = true;

            }

        }

    } 

    return array;

}

const array = [1, 9, 2, 4, 8];
const result = bubbleSort(array);

console.log(result);

const array2 = [4, 9, 7, 1, 3, 6, 5];
const result2 = bubbleSort(array2);

console.log(result2);

