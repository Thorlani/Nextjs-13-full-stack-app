import { NextResponse } from "next/server";
import { main } from "../route";
import { prisma } from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/posts/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/posts/")[1];
    const { title, description } = await req.json();
    await main();
    const post = await prisma.post.update({
      where: { id },
      data: { title, description },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// export const DELETE = async (req: Request, res: NextResponse) => {
//   try {
//     const id = req.url.split("/posts/")[1];
//     await main();
//     const post = await prisma.post.delete({ where: { id } });
//     return NextResponse.json({ message: "Success", post }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/posts/")[1];
    console.log(id);

    await main();
    const post = await prisma.post.delete({ where: { id } });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
