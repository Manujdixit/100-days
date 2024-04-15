// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  private _courseCount = 1;
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getappleemail(): string {
    return `apple ${this.email}`;
  }

  get coursecount(): number {
    return this._courseCount;
  }

  set coursecount(coursenum) {
    if (coursenum <= 1) {
      throw new Error("Course count should be more than 1");
    }
  }
}

const hitesh = new User("a", "a");
// hitesh.city = "a";
