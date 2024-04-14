"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
addtwo(3);
function signup(name, email, isPaid) { }
signup("a", "b", true);
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login("a", "b");
// function getvalue(val: number) {
//   if (val > 5) return true;
//   return "200 ok";
// }
// getvalue();
var gethello = function (s) {
    return "";
};
// const heroes = ["thor", "spiderman", "ironman"];
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
