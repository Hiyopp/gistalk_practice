/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopLogo = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

type distinType = {
  distinguish: string | undefined;
};

function Logo({ distinguish }: distinType) {
  return <TopLogo>{distinguish}</TopLogo>;
}

export default Logo;
