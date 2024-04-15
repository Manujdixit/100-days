const user: (string | number)[] = [1, "h", 1];

let tuser: [string, number, boolean];
tuser = ["h", 1, true];

let rgb: [number, number, number];
rgb = [255, 255, 255];

type User = [number, string];
const newUser: User = [1, "a"];

newUser[1] = "h";
// newUser.push(true);
