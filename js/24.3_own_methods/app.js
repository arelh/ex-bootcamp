const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
console.log(arr.myFilter((n) => n % 2)); // [1, 3, 5, 7, 9]