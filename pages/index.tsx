import Container from './Components/Layout/Container'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import Menu from './Components/Layout/Menu';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-family: 'Archivo', 'Poppins';
    background-color: #f3f3f3;
  }
`;

const App  = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <App>
        <Header />
        <Menu />
        <Container />
        <Footer />
      </App>
    </>
  )
}
