const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {
let val = student[key]
    // display the properties
    console.log(`${key} => ${val}`);
}

