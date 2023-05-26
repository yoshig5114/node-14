const hobbit = {
    firstName: "Frodo",
    lastName: "Baggins",
    age: 51,
  };

  //DOT NOTATION
console.log(hobbit.firstName);
console.log(`${hobbit.firstName} ${hobbit.lastName} is ${hobbit.age} years old`);

  //   SQUARE BRACKET NOTATION
  console.log(hobbit[firstname]);  //will throw an "not defined error"
  console.log(hobbit["firstName"]);
  console.log(`${hobbit["firstName"]} ${hobbit["lastName"]} is ${hobbit["age"]} years old`)

const book = {
    title: "the stinky cheese and other fairly stupid tales",
    author: "Lane Smith",
    noOfPages: 35,
    haveRead: true,
    info: function(){
        this.author,
        this.haveRead
    }

}