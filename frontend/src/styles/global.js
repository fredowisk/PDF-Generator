import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  box-sizing: border-box;
}
body {
  background: #F0F0F5;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  background-color: #1D1D1D;
}

button {
  cursor: pointer;
}
`;