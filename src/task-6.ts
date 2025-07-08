function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]); // 1
console.log(num, typeof num);
const str = getFirstElement<string>(["a", "b", "c"]); // "a"
console.log(str, typeof str);
const bool = getFirstElement<boolean>([true, false, true]); // true
console.log(bool, typeof bool);
