module.exports = function towelSort(matrix) {
    if (matrix) {
        let array = [];
        matrix.forEach((arr, i) => {
            if (i % 2 === 0) {
                array = array.concat(arr);
            } else {
                array = array.concat(arr.reverse());
            }
        });
        return array;
    }
    return [];
};
