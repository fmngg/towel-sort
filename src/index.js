// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    if (matrix.length == 0) {
        return [];
    }

    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];

        if (index % 2 != 0) {
            element.reverse();
        }
    }

    const string = matrix.toString();
    console.log(string);
    const array = string.split(",");
    console.log(array);
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (!isNaN(element)) {
            newArr.push(element);
        }
    }

    return newArr;
};
