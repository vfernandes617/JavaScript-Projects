let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"

//toFixed() method//
let num = 123.456;

console.log(num.toFixed());    // Output: "123"
console.log(num.toFixed(2));   // Output: "123.46"
console.log(num.toFixed(5));   // Output: "123.45600"
console.log(num.toFixed(0));   // Output: "123"
//Valueof() method//
let num = new Number(123);
console.log(num.valueOf());  // Output: 123
let str = new String("Hello, world!");
console.log(str.valueOf());  // Output: "Hello, world!"
let bool = new Boolean(true);
console.log(bool.valueOf());  // Output: true
let date = new Date("2023-01-01");
console.log(date.valueOf());  // Output: 1672531200000 (milliseconds since epoch)
class MyClass {
    constructor(value) {
      this.value = value;
    }
    
    valueOf() {
      return this.value;
    }
  }
  
  let obj = new MyClass(42);
  console.log(obj.valueOf());  // Output: 42
  