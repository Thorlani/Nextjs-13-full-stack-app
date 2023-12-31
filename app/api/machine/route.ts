import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { main } from "../posts/route";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const accounts = await prisma.account.findMany();

    return NextResponse.json({ message: "Success", accounts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name } = await req.json();
    await main();
    const account = await prisma.account.create({ data: { name } });
    return NextResponse.json({ message: "Success", account }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
