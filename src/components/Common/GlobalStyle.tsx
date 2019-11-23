import { createGlobalStyle } from 'styled-components'
import Roboto from 'assets/fonts/Roboto/Roboto-Regular.woff'
import Poppins from 'assets/fonts/Poppins/Poppins-Regular.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Poppins';
  src: url('${Poppins}') format('woff');
  font-weight: 600;
  font-style: normal;
  }
  @font-face {
  font-family: 'Roboto';
  src: url('${Roboto}') format('woff');
  font-weight: 600;
  font-style: normal;
}
  body {
  font-family: 'Poppins', sans-serif;
}
`
