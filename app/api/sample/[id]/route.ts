import { getById, removePosts, updatePosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = (req: Request, res: Response) => {
  try {
    const id = req.url.split("register/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json(
        { message: "ERROR" },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "ERROR", error },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("register/")[1];
    updatePosts(id, title, desc);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const DELETE = (req: Request, res: Response) => {
  try {
    const id = req.url.split("register/")[1];
    removePosts(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
