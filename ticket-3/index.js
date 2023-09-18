function countNumberOfNinesInNumber(number) {
  let count = 0;
  let numStr = number.toString();
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit === "9") {
      count++;
    }
  }

  return count;
}

console.log(countNumberOfNinesInNumber(99.999))       // 5 
console.log(countNumberOfNinesInNumber(9))          // 1 

// bug solved as input was a number but operations required string inputs