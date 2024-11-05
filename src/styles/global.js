import { createGlobalStyle } from "styled-components";
import backgroundImage from '../styles/assests/Background.jpg';

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: black;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

@media (max-width: 768px) {
      background-size: cover; 
      background-position: center center;
      height: 100vh;
      }


      @media (max-width: 480px) {
      background-size: cover; 
      background-position: center center;
      height: 100vh;
        }
`;


export default Global;
