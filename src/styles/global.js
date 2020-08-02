import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import ImageBackground from '../assets/mercado.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Ubuntu', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #E4E4E4;
    background-image: url(${ImageBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-blend-mode: overlay; */
  }

  box-sizing, input, button {
    font: 14px 'Roboto', 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input:focus, button:focus {
    outline: none;
  }
`;
