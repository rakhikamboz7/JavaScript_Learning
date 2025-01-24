let numbers = [1, 5, 2, 8, 3]; 
let mixedArray = [1, "hello", true, { name: "Alice" }]; // In js Array is hetrogeneous  


console.log("First element:", numbers[0]);


numbers.push(10); //added element at the end
numbers.unshift(0); //added element at the beginning
console.log("Array after push and unshift:", numbers);

//Removing Elements
numbers.pop(); //removes the last element
numbers.shift(); //removes the first element
console.log("Array after pop and shift:", numbers);

// Length of the array
console.log("Length:", numbers.length);



//Adding elements at a specific index
numbers.splice(2, 0, 7,9); //adds 7 and 9 at index 2 and no element deleted
console.log("Array after splice:", numbers);


//Removing elements at a specific index
numbers.splice(2,2); //remove 2 elements starting at index 2
console.log("Array after splice (remove):", numbers);


// Finding the index of an element
let index = numbers.indexOf(8);
console.log("Index of 8:", index);

// Checking if an element exists
let exists = numbers.includes(3);
console.log("Includes 3:", exists);//give true if exists and false if not

// Sorting the array
numbers.sort((a, b) => a - b); // Ascending order for numbers
console.log("Sorted:", numbers);

// Reversing the array
numbers.reverse();
console.log("Reversed:", numbers);




// Filtering the array
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// Mapping the array (creating a new array with transformed elements)
let doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Reducing the array (combining elements to a single value)
let sum = numbers.reduce((total, number) => total + number, 0); // 0 is the initial value
console.log("Sum:", sum);
