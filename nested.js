//var nestedArray =[
  //  [5,6,7,-2],
   // [-5,-6,-7],
   // [8,9,10],
  //  [3,5,2,1,4],
    //[-3,5,2,1,],
   // [4,2,6,8],
//]

//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.

//2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.

//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.

//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.

//5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.

//6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.

//7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.

//8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.

//9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.

//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.


let result = '';
  let newArr = [];
  function largestOfFour(arr) {
  for(let i=0; i<arr.length; i++){
    let biggestInArr;
   for(let j=0; j<arr[i].length; j++){
     biggestInArr = biggestInArr === undefined ?  arr[i][j] : arr[i][j]>biggestInArr ? arr[i][j] : biggestInArr;
       //console.log(biggestInArr);
   }
   newArr.push(biggestInArr);
   console.log(newArr);
   //console.log([biggestInArr])
   // } 
  
  }
  
  return newArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);