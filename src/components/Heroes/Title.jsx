import React from "react";
import styled from "styled-components";

const Title = () => {
  const Container = styled.div`
    max-width: 976px;
    margin: 0 auto;
  `;
  const TitleBlock = styled.div`
    min-height: 262px;
    min-width: 1030px;
  `;
  const Titleh1 = styled.h2`
  margin: 0;
    color: #fff;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  `;
  const TitleDescr = styled(Titleh1)`
  margin-top: 19px;
    font-size: 30px;
    text-transform: none;
  `;

  return (
    <Container>
      <TitleBlock>
        <Titleh1>CHOOSE YOUR HERO</Titleh1>
        <TitleDescr>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </TitleDescr>
      </TitleBlock>
    </Container>
  );
};

export default Title;
