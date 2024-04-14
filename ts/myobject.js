"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true,
};
function createuser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newuser = { name: "as", isPaid: true, email: "h" };
createuser(newuser);
function createuser1(user) {
    return { name: "", email: "", isactive: true };
}
createuser1({ name: "", email: "", isactive: true });
var myuser = {
    _id: "12345",
    name: "h",
    email: "j",
    isactive: false,
};
myuser.email = "m";
