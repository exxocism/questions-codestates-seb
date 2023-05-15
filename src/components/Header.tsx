import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Locations } from '../constants';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 78px;
  margin-right: 12px;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 88.02%;
  flex-grow: 1;
`;

const Hamberger = styled.img`
  margin-right: 78px;
`;

const Header = () => {
  return (
    <Container>
      <Logo src="./assets/images/logo.svg" alt="logo" />
      <Heading>COZ Shopping</Heading>
      <Link to={Locations.HOME}>Main</Link>
      <Link to={Locations.BOOKMARK}>BookMark</Link>
      <Hamberger src="./assets/images/hamburger.svg" alt="hamburger" />
    </Container>
  );
};

export default Header;
