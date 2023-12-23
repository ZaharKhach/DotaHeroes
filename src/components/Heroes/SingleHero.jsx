import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { baseUrl } from "../../api/baseUrl";

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
    background: url(${props => props.image}) center center/cover no-repeat;
    width: 100%;
    height: 100%;
    transition: 0.3s all;
    cursor: pointer;
  `;

  const Wrapper = styled.div`
    width: 297px;
    height: 160.063px;
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
  `;
const SingleHero = ({ name, img }) => {

  return (
    <Wrapper>
      <Icon image={baseUrl + img} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default SingleHero;
