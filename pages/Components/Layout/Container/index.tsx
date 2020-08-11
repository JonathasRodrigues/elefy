import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  padding: 0.8rem;
  margin: 0.8rem;
`;

const Title = styled.h1`
  color: purple;
`;

const Container = () => {
  return (
    <Main >
      <Title>Hello, Elefy.</Title>
    </Main>
  );
}

export default Container;