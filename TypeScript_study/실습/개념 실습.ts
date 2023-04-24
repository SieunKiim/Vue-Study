function sum(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

console.log(sum(1,3,4,5,6,6,7))