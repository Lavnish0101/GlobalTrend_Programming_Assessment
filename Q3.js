function flattenArray(nestedArray) {
    let flattenedArray = [];

    function flatten(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                flattenedArray.push(element);
            }
        });
    }

    flatten(nestedArray);

    return flattenedArray;
}

const nestedArray1 = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray1));
