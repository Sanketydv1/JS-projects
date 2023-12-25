let n = prompt("Enter a number:");
let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
const factorial = arr.reduce((res, pre) => {
  return res * pre;
});

console.log(factorial);
