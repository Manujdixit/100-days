import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  await prisma.post.create({
    data: {
      title: "titlew",
      published: true,
      // author: {
      //   connect: {
      //     id: 1,
      //   },
      // },
      authorId: 1,
    },
  });
}
main();
