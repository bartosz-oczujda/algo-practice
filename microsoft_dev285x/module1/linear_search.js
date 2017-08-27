const linearSearch = (number, array) => {

    for(let i = 0; i < array.length; i++) {

        const currentNum = array[i];
        
        if(currentNum === number) {

            return i;

        }

    }

    return -1;

}

const result = linearSearch(2, [3, 2, 3]);
console.log(result);

const result2 = linearSearch(2, [3, 6, 3]);
console.log(result2);
