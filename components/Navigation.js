import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 0;
  margin-bottom: 100px;
`;

const NavItem = styled.a`
  font-size: 1.7rem;
  font-weight: 200;
  color: ${props =>
    props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)'};
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Navigation = () => (
  <Nav>
    <Link href="/">
      <NavItem>Home</NavItem>
    </Link>
    <Link href="about">
      <NavItem>About</NavItem>
    </Link>
    <NavItem>Projects</NavItem>
    <NavItem>Contact</NavItem>
  </Nav>
);

export default Navigation;
