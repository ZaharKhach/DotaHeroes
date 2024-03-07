import styled from "styled-components";

const Switching = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 1.34vh;
  background: #000;
  box-shadow: 0px 0.53vh 8.1vh 12.06vh #000;
`;

const Rectangle = () => {
  return <Switching />;
};

export default Rectangle;
