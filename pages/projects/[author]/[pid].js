import { useRouter } from "next/router";
import React from "react";

const Project = () => {
  const router = useRouter();
  const { author, pid } = router.query;

  return (
    <div>
      <h1>Project</h1>
      <h3>Author: {author}</h3>
      <h4>id: {pid}</h4>
    </div>
  );
};

export default Project;
