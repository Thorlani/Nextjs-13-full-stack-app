"use client";
import { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const AddComment = ({ id }: { id: string }) => {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoader(true);
    if (comment.name === "" && comment.comment === "") {
    } else {
      try {
        axios
          .post(`${process.env.NEXT_API_URL + "comments/" + id}`, {
            comment: comment.comment,
            name: comment.name,
          })
          .then((res) => {
            setLoader(false);
            window.location.reload();
          });
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }
    setLoader(false);
  };

  return (
    <>
      {loader && (
        <div className="min-h-[100vh] min-w-[100vw] fixed top-0 left-0 z-[9999999] bg-black/90 flex justify-center items-center">
          <InfinitySpin width="500" color="#4fa94d" />
        </div>
      )}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="w-[300px] md:w-[500px] h-[41px] indent-2 outline-none border-1px border-[#000]"
            name="name"
            value={comment.name}
            onChange={(e) =>
              setComment({
                ...comment,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Comment</label>
          <textarea
            className="w-[300px] md:w-[500px] h-[200px] p-2 outline-none border-1px border-[#000]"
            name="comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </div>
        <button
          type="button"
          onClick={
            comment.name === "" || comment.comment === ""
              ? () => {}
              : handleSubmit
          }
          className="w-fit h-fit py-3 px-10 bg-[#000] text-[#fff] rounded-[10px]"
        >
          Submit Comment
        </button>
      </div>
    </>
  );
};

export default AddComment;
