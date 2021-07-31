import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 1300px;
  margin: auto;
`;

export const RightSide = styled.div`
  padding: 10px 20px;
`;

export const StylesDiv = styled.div`
  margin: 20px 0 20px 0;
  width: 100%;
`;

export const BagDiv = styled.div`
  margin-top: 10px;
  display: flex;
  cursor: pointer;
`;

export const Navbar = styled.div`
  min-height: 50px;
  background-color: #525252;
  max-width: 1300px;
  margin: 30 auto;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const PortalImg = styled.div`
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: white;
  padding: 20px;
`;

export const Thumbnails = styled.div`
  position: absolute;
  top: 30px;
  cursor: pointer;
  height: 295px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
`;

export const ImgZoom = styled.div`
  background: url('${(props) => props.srcImg}') no-repeat top center;
  background-size: cover;
  width: ${(props) => props.height};
  height: ${(props) => props.width};
  cursor: zoom-in;

  &: hover {
    background-size: 405%;
  }
`;

/*
export const PortalImg = styled.div`
  position: absolute;
  top: 0;
  margin: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 40px;
  background-color: white;
`;
*/
