const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isActive: true,
};

function createuser({ name: string, isPaid: boolean }) {}

let newuser = { name: "as", isPaid: true, email: "h" };

createuser(newuser);

//type aliasing
type User = {
  name: string;
  email: string;
  isactive: boolean;
};

function createuser1(user: User): User {
  return { name: "", email: "", isactive: true };
}

createuser1({ name: "", email: "", isactive: true });

type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isactive: boolean;
  creditcard?: number;
};

type cardnumber = {
  cardnumber: string;
};

type carddate = {
  carddate: string;
};

type carddetails = cardnumber &
  carddate & {
    CVV: number;
  };

let myuser: User1 = {
  _id: "12345",
  name: "h",
  email: "j",
  isactive: false,
};

myuser.email = "m";
// myuser._id = "hjed";

export {};
