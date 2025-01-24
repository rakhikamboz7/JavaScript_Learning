function reverseArray(arr) {       //takes arr as input     
    let left = 0;  //left will point to the start of the array.
    let right = arr.length - 1;     //pointer to know the length of an arrray
  
    while (left < right) {   //loop will run until left=right

      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; //after swapping first and last elemets move left side further and 
      right--; // move right pointer towards left side
    }
  
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];

  console.log("Original Array:", arr);  
  console.log("Reversed Array:", reverseArray(arr));  