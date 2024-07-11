function removeDuplicates(array) {
    return Array.from(new Set(array));
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // Output: ['apple', 'banana', 'orange']
