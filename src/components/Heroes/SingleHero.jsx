import React from "react";
import styled from "styled-components";

import { baseUrl } from "../../api/baseUrl";

const Wrapper = styled.div`
  width: 297px;
  height: 160.063px;
  position: relative;
  &:hover {
    z-index: 1;
  }
`;
const Name = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: 0.7s all;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  ${Wrapper}:hover & {
    transform: translateY(0);
  visibility: visible;

    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 100%;
  position: relative;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    transform: scale(1.35);
    box-shadow: 0px -61px 77px 0px #000 inset;
  }
`;

const SingleHero = ({ name, img }) => {
 console.log(img)
  return (
    <Wrapper>
      <Icon
        as="img"
        src={`https://api.opendota.com${img}`}
      />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default SingleHero;
