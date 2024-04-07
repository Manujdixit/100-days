// let x: number = 1;
// x = "a";
// console.log(x);

// const hello = (firstName: string) => {
//   console.log("hello" + firstName);
// };

// hello("manuj");

// function sum(a: number, b: number): number {
//   return a + b;
// }

// const result = sum(1, 2); // Provide both 'a' and 'b'
// console.log("Result:", result); // Should print "Result: 3"

// function isLegal(age: number) {
//   if (age > 18) console.log("major");
//   console.log("minor");
// }

// isLegal(18);

function functionRunner(name: () => void) {
  setTimeout(name, 1000);
}
functionRunner(function () {
  console.log("hi there");
});
