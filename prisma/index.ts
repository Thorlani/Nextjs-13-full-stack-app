// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;
// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   //@ts-ignore
//   if (!global.prisma) {
//     //@ts-ignore
//     global.prisma = new PrismaClient();
//   }
//   //@ts-ignore
//   prisma = global.prisma;
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
