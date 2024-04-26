"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
//   email: string
// ) {
//   const res = await prisma.user.create({
//     data: { username, password, firstName, lastName, email },
//   });
//   console.log(res);
// }
// insertUser("admina", "12345", "admina", "singha", "a@gmail.com");
// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }
// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { username },
//     data: { firstName, lastName },
//   });
//   console.log(res);
// }
// updateUser("admin", { firstName: "manuj", lastName: "dixit" });
// async function getUsre(username: string) {
//   const res = await prisma.user.findFirst({
//     where: {
//       username: username,
//     },
//   });
//   console.log(res);
// }
// getUsre("admin");
// async function createTodo(userId: number, title: string, description: string) {
//   const res = await prisma.todo.create({
//     data: { userId, title, description },
//   });
//   console.log(res);
// }
// createTodo(1, "go", "goa");
// async function getTodos(userId: number) {
//   const res = await prisma.todo.findMany({
//     where: { userId: userId },
//   });
//   console.log(res);
// }
// getTodos(1);
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: { userId: 1 },
            select: { user: true, title: true, description: true },
        });
        console.log(res);
    });
}
getTodosAndUserDetails(1);
