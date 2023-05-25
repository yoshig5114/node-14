function counter() {
    let count = 0;
    console.log("outer scope");
    return function increment() {
      // Increment is the inner scope
      // counter is the outer scope
      // Increment's scope encloses the variable count
      // and can access if after counter is executed
      count++;
      console.log(count);
    };
  }
  
  let increment = counter();
  counter();
  counter();
  increment();
  increment();
  increment();
