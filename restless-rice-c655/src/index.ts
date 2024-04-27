import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

async function main(level: string, message: string, meta: Json) {
	const res = await prisma.log.create({
		data: {
			user,
		},
	});
}
