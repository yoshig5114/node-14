function counter(str) {
    let orderNum = 0;
    let orderType = str;
    //console.log("outer scope");
    return function increment() {
      // Increment is the inner scope
      // counter is the outer scope
      // Increment's scope encloses the variable count
      // and can access if after counter is executed
      orderNum++;
      console.log(str, orderNum);
      return orderNum;
    };
  }
  
  let dineIn = counter("dine In");
  let takeOut = counter("Take out");

dineIn();
dineIn();
dineIn();
dineIn();
dineIn();
dineIn();
dineIn();
takeOut();
takeOut();
takeOut();
takeOut();

