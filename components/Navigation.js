import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const NavItem = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)')};
  transition: color 0.3s ease;
  margin-bottom: 10px;

  &.selected {
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
    opacity: 1;
  }

  &:hover {
    color: rgba(0, 0, 0, 1);
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
