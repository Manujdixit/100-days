interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubtoken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// const hitesh: User = {
//   email: "h",
//   userId: 1,
//   dbId: 2,
//   startTrail: () => {
//     return "trail started";
//   },
//   getCoupon: (name: "hitesh10", off: 2) => {
//     return 10;
//   },
//   githubtoken: "lk",
//   role: "admin",
// };
// hitesh.email = "x";

const hitesh: Admin = {
  email: "h",
  userId: 1,
  dbId: 2,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 2) => {
    return 10;
  },
  githubtoken: "lk",
  role: "admin",
};
hitesh.email = "x";

export {};
