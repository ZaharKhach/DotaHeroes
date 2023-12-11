import React from "react";
import styled from "styled-components";
import background from "../../assets/images/second_bg.png";

const Wrapper = styled.section`
  min-height: 110vh;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  background: url(${background}) center center/cover no-repeat;
  border: none;
  background-size: 100% 110%;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InfoTitle = styled.h2`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const InfoCount = styled(InfoTitle)`
  margin-top: 37px;
  font-size: 64px;
`;

const SecondSection = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <InfoTitle>Players</InfoTitle>
        <InfoCount>465.154</InfoCount>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>Matches last day</InfoTitle>
        <InfoCount>968.676</InfoCount>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SecondSection;
