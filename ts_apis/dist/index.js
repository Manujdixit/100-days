"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const sumOfAgee = sumOfAge({ name: "a", age: 12 }, { name: "b", age: 13 });
console.log(sumOfAgee);
