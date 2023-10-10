"use client";
import { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const EditPost = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [loader, setLoader] = useState(false);
  const [postContent, setPostContent] = useState({
    title: title,
    description: description,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoader(true);
    if (postContent.title === "" && postContent.description === "") {
    } else {
      try {
        axios
          .put(`${process.env.NEXT_PUBLIC_API_URL + "posts/" + id}`, {
            title: postContent.title,
            description: postContent.description,
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
            className="w-[300px] md:w-[700px] h-[41px] indent-2 outline-none border-1px border-[#000]"
            name="name"
            value={postContent.title}
            onChange={(e) =>
              setPostContent({
                ...postContent,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Comment</label>
          <textarea
            className="w-[300px] md:w-[700px] h-[200px] md:h-[400px] p-2 outline-none border-1px border-[#000]"
            name="comment"
            value={postContent.description}
            onChange={(e) =>
              setPostContent({
                ...postContent,
                description: e.target.value,
              })
            }
          />
        </div>
        <button
          type="button"
          onClick={
            postContent.title === "" || postContent.description === ""
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

export default EditPost;
