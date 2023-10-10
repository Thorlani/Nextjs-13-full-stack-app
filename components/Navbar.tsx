import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl italic">Thorlani</h1>
      </Link>
      <Link href={"/edit"}>
        <p className="cursor-pointer">Edit Contents</p>
      </Link>
    </div>
  );
};

export default Navbar;
