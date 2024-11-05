import styled from "styled-components";
import backgroundImage from '../assets/Background.jpg';




export const Container = styled.div`

  position: relative;
  height: 150px;

  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(20px);
  z-index: 0;
`;

export const BordaInferior = styled.div`
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 100%;
  height: 1px; 
  background-color: rgba(255, 255, 255, 1);
  z-index: 1; 
`;

export const Content = styled.div`
  position: relative;
  z-index: 2; 
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;
