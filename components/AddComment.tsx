"use client";
import { useState } from "react";
import axios from "axios";

const AddComment = ({ id }: { id: string }) => {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });

  const data = {
    comment: comment.comment,
    name: comment.name,
  };

  const handleSubmit = () => {
    axios.post(`${process.env.NEXT_API_URL + "comments/" + id}`, data);
  };

  return (
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
    </div>
  );
};

export default AddComment;
