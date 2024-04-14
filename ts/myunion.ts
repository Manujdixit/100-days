let score: number | string | boolean = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hitesh: User =
  // | Admin
  { name: "hitesh", id: 334 };

// hitesh = {
//   username: "h",
//   id: 3,
// };

function getdbid(id: number | string) {
  if (typeof id === "string") id.toLocaleLowerCase();
}
getdbid(3);
getdbid("3");

const data: number[] = [1, 2, 3, 4];
const data1: string[] = ["1", "2"];
const data2: (number | string)[] = ["1", "2", 3, 4];

let pi: 3.14 = 3.14;
// pi = 3.145;

let seatallotment: "aisle" | "middle" | "window";
// seatallotment = "crew";

export {};
