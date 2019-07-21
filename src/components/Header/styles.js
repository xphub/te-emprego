import styled from 'styled-components';

const Container = styled.div`
  width: 1340px;
  margin: auto;
`;

const Wrapper = styled.div`
  color: #ffffff;
  height: 86px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 60%;
  }
`;

export { Container, Wrapper, Logo };
