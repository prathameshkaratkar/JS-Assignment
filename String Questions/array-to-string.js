// 2.	Convert the array ['H', 'e', 'l', 'l', 'o'] into a string without any separators.

const arr = ['H', 'e', 'l', 'l', 'o'];

let result = ""
for(let word in arr) {
    result += arr[word]
}
console.log(result);