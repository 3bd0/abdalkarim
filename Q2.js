//  Function for check array has unique numbers or not.
function uniqueNo(arr) {
        // Initiate new variable for array.
    const numSet = new Set();
  
    for (const num of arr) {
        // Check duplicated no. in the set and return false if there is.
      if (numSet.has(num)) {
        return false; 
      }
        // Adding the number to the set.
      numSet.add(num);
    }
  
    return true; // All numbers are unique.
  }



  // Function to check the inputs and target.
  function chk(arr, tar) {
    if (!Array.isArray(arr)) {
      return "Input must be array of integer numbers"; // Input not an array.
    }
    if (!Number.isInteger(tar)) {
      return "Target must be integer"; // Target not an integer number.
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) {
        return "Elements of array must be integer numbers"; // Array element is not an integer.
      }
    }
  
    return true; // All elements are integers
  }



  // Function for get the indices of summation array elements which are = to target
  function inputIdx(arr, tar) {
    if (chk(arr, tar) instanceof String){
        return chk(arr, tar)
    }
    if (!uniqueNo(arr)){
        return "The input doesn't have unique numbers"
    }
    // Variable to shorten the syntax
    const n = arr.length;
    // Array to get all summation of the elements
    const result = [];
    // Object to store all array elements summation with the indices
    const idx = {};
    // Loop to make summation for all array pairs and store them in results array and idx object
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const sum = arr[i] + arr[j];
        result.push(sum);
        idx[sum] = [i, j]
      }
    }
    // to get the frequency of target inside the results
    const tar_res = result.filter(element => element === tar).length;
    switch (tar_res) {
        case 0:
            // if the target has no solution
            return 'The summation of input elements doesn\'t include the target';
            break;
        case 1:
            // one solution then give it the answer
            return idx[tar];
            break;

        default:
            // if there is no more than 1 solution
            return 'There are more than 1 solution';
    }
  }