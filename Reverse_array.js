function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {

      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray);  