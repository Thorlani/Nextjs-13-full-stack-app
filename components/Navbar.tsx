"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logOut, logIn } from "@/store/slice";

const Navbar = () => {
  const isCurrentUserAdmin = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch();
  const [openModel, setOpenModel] = useState(false);

  console.log(isCurrentUserAdmin);
  const handleSubmit = () => {
    dispatch(logIn());
    setOpenModel(false);
  };
  return (
    <>
      <div className="flex justify-between items-center py-5 px-10">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl italic">Thorlani</h1>
        </Link>
        {isCurrentUserAdmin ? (
          <Link href={"/edit"}>
            <p className="cursor-pointer">Edit Contents</p>
          </Link>
        ) : (
          <button onClick={() => setOpenModel(true)}>
            <p className="cursor-pointer">Log In to Edit Content</p>
          </button>
        )}
      </div>
      {openModel && (
        <div className="min-h-[100vh] min-w-[100vw] fixed top-0 left-0 z-[9999999] bg-black/90 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <input
              className="w-[300px] h-[41px] indent-2 outline-none border-1px border-[#000]"
              type="text"
              placeholder="Admin's Name"
            />
            <button
              className="w-fit h-fit py-3 px-10 bg-[gray] text-[#fff] rounded-[10px]"
              type="button"
              onClick={handleSubmit}
            >
              Enter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
