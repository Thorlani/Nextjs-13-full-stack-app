import { NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { main } from "../../posts/route";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/comments/")[1];
    await main();
    const comments = await prisma.comment.findMany({ where: { postId: id } });
    if (!comments) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", comments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/comments/")[1];
    const { comment, name } = await req.json();
    await main();
    const comments = await prisma.comment.create({
      data: {
        comment,
        name,
        postId: id,
      },
    });
    return NextResponse.json({ message: "Success", comments }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
