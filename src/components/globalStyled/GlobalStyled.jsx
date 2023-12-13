import styled from "styled-components";

export const GlobalWrapper = styled.section`
  box-sizing: border-box;
  height: 100vh;
  background: center center/cover no-repeat;
  border: none;
  background-size: 100% 100%;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Error = styled.div`
display: block;
margin: 0 auto;
width: 50%;
text-align: center;
`;

export const Loading = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: black;
`;