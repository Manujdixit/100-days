import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  try {
    await prisma.user.create({
      data: {
        email: "manu@gmail.com",
        name: "manu",
      },
    });
    console.log("mauj");
  } catch (error) {
    console.error("error creating user:", error);
  }
}

main();
//   .then(async () => {
//     console.log("done with the query");
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
