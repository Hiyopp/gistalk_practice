//import tw from "tailwind-styled-components";

import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
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

const Title = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: grey;

  color: grey;
  font-size: 30px;
`;

const Body = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: grey;
`;

type Group = {
  userId: number;
  id: number;
  title: number;
  body: number;
};

type setDistinguishType = {
  setDistinguish: Dispatch<SetStateAction<string | undefined>>;
};

function Home({ setDistinguish }: setDistinguishType) {
  setDistinguish("Home Page");
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const { error, data, isLoading } = useQuery({
    queryKey: ["mockData"],
    queryFn: async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => data)
        .catch((err) => console.log(err)),
  });
  if (isLoading) return <Load>Loading...</Load>;
  if (error) return "An error has occurred: " + error;

  const gotoLookPost = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <PostWrapper>
      {data.map((data: Group) => (
        <Post key={data.id} onClick={() => gotoLookPost(data.id)}>
          <Title key={data.id + 100}>{data.title}</Title>
          <Body key={data.id + 200}>{data.body}</Body>
        </Post>
      ))}
    </PostWrapper>
  );
}

export default Home;
