"use client";

import React from "react";
import axios from "axios";

const Delete = ({ id }: { id: string }) => {
  const handleDelete = () => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL + "post/" + id}`);
  };
  return (
    <button
      onClick={handleDelete}
      className=" px-4 py-1 rounded-[12px] outline-none border-[1px] border-[red] bg-[red] hover:text-[#fff] ml-4"
    >
      Delete
    </button>
  );
};

export default Delete;
