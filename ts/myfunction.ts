function addtwo(num: number) {
  return num + 2;
}
addtwo(3);

function signup(name: string, email: string, isPaid: boolean) {}
signup("a", "b", true);

function login(name: String, email: string, isPaid: boolean = false) {}
login("a", "b");

// function getvalue(val: number) {
//   if (val > 5) return true;
//   return "200 ok";
// }
// getvalue();

const gethello = (s: string): string => {
  return "";
};

// const heroes = ["thor", "spiderman", "ironman"];
const heroes = [1, 2, 3];
heroes.map((hero: number): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleerror(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
