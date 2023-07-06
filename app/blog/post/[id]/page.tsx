"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef, Fragment } from "react";

interface ContentProps {
  id: string;
  title: string;
  description: string;
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const getSpecificPost = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const data = await res.json();
    return data;
  };

  const { post } = await getSpecificPost();
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}
