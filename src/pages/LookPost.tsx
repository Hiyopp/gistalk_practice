import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const Load = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostWrapper = styled.div`
  margin-top: 80px;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  flex-direction: column;
`;

const Post = styled.div`
  @media (max-width: 687.5px) {
    width: 80%;
    height: 200px;
  }
  @media (min-width: 687.5px) {
    width: 550px;
    height: 200px;
  }

  &:hover {
    cursor: pointer;
  }

  background: #f5f5f7;
  border: 1px solid grey;

  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: grey;
`;

type setDistinguishType = {
  setDistinguish: Dispatch<SetStateAction<string | undefined>>;
  postId: number | undefined;
};

type Group = {
  userId: number;
  id: number;
  title: number;
  body: number;
};

function LookPost({ setDistinguish, postId }: setDistinguishType) {
  setDistinguish("Post Page");
  window.scrollTo(0, 0);

  const { error, data, isLoading } = useQuery({
    queryKey: ["mockData"],
    queryFn: async () =>
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(({ data }) => data)
        .catch((err) => console.log(err)),
  });
  if (isLoading) return <Load>Loading...</Load>;
  if (error) return "An error has occurred: " + error;

  return (
    <PostWrapper>
      {data.map((data: Group) => (
        <Post key={data.id}>
          <Body key={data.id + 100}>{data.body}</Body>
        </Post>
      ))}
    </PostWrapper>
  );
}

export default LookPost;
