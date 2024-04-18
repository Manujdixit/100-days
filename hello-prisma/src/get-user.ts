import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const users = await prisma.user.findMany({});
  //   console.log(users);
  const users = await prisma.user.findMany({
    where: {
      email: "manuj@gmail.com",
    },
    include: { posts: true },
  });
  console.log(users);
}
main();
