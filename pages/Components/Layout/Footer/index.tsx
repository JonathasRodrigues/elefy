import styled from 'styled-components';

const Foot = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 0.8rem 0.8rem 0.8rem;
`;

const Footer = () => {
  return (
    <Foot>
      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @Elefy
        </a>
      </footer>
    </Foot>
  )
};

export default Footer;