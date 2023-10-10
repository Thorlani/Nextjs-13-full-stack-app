"use client";

import React from "react";

const Delete = ({ id }: { id: string }) => {
  return (
    <button
      onClick={() => console.log(`Deleted post with the id ${id}`)}
      className=" px-4 py-1 rounded-[12px] outline-none border-[1px] border-[red] bg-[red] hover:text-[#fff] ml-4"
    >
      Delete
    </button>
  );
};

export default Delete;
