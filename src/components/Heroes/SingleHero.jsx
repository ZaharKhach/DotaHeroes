import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Name = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  transition: 0.4s all;
  transform: translate(20%, 30%);

  opacity: 0;
  visibility: hidden;
`;

const Icon = styled.div`
  position: relative;
  background: url(${(props) => props.image}) center center/cover no-repeat;
  width: 100%;
  height: 100%;
  transition: 0.3s all;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 21.44vh;
  position: relative;
  &:hover {
    ${Name} {
      z-index: 2;
      transform: translate(-13%, 30%);
      visibility: visible;
      opacity: 1;
      pointer-events: none;
    }
    ${Icon} {
      z-index: 1;
      transform: scale(1.3);
      box-shadow: 0px -20px 30px 0px #000 inset, 5px 5px 10px 0px #000;
    }
  }
  @media (max-width: 540px) {
    height: 17.44vh;
  }
`;
const SingleHero = ({ id, name, img }) => {
  return (
    <Wrapper>
      <Link to={`/heroes/${id}`}>
        <Icon image={"https://cdn.cloudflare.steamstatic.com/" + img} />
        <Name>{name}</Name>
      </Link>
    </Wrapper>
  );
};

export default SingleHero;
