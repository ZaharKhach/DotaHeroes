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


export const AttributesBox = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 15px;
`;

export const BlockBase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBase = styled.div`
  margin-top: 23px;
  color: #cecece;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 14px;
  text-align: center;
`;

export const RowBase = styled.div`
  width: 68%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;