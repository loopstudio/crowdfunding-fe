import { useRouter } from "next/router";

const AuthorProjects = () => {
  const router = useRouter();
  const { author } = router.query;
  return <div>Projects by {author}</div>;
};

export default AuthorProjects;
