const count = function getMax(array) {
    return Math.max(...array); // (like params in c#)
};
console.log(count([1, 5, 60, 30, 24]));
function forEachNumbers(...numbers) {
    for (var i = 0; i < numbers.length; i++) {
        console.log(i);
    }
}
forEachNumbers(1, 2, 4, 6);
//# sourceMappingURL=rest-operator.js.map