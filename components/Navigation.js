import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 0;
  margin-bottom: 60px;
`;

const NavItem = styled.a`
  font-size: 1.7rem;
  font-weight: 200;
  color: ${props =>
    props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)'};
  transition: color 0.3s ease;

  &.selected {
    color: rgba(255, 255, 255, 1);
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Navigation = () => (
  <Nav>
    <Link href="/">
      <NavItem>Home</NavItem>
    </Link>
    <Link href="/about">
      <NavItem>About</NavItem>
    </Link>
    <Link href="/projects">
      <NavItem>Projects</NavItem>
    </Link>
    <Link href="/contact">
      <NavItem>Contact</NavItem>
    </Link>
  </Nav>
);

export default Navigation;
