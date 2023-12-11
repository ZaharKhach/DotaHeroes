import styled from "styled-components";

const Switching = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 10px;
  background: #000;
  box-shadow: 0px 4px 80.5px 70px #000;
`;

const Rectangle = () => {
  return <Switching />;
};

export default Rectangle;
