import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-20">
      <Button variant={"link"}>
        <Link href="/post">Get Started</Link>
      </Button>
    </main>
  );
}
