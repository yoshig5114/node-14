function isEven(n) {
    // If n is negative, make it positive
    if (n < 0) 
    {
        n = n * -1;
    }
  
    // If n is 0 after n - 2, even
    // else if n is 1 after n - 2, odd
    // else keep call itself until n is 0 or 1
    if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } else {
        console.log(isEven(n-2));
      return isEven(n - 2);
    }
  }
  
  isEven(1201); // false