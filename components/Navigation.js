import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 768px;
  margin: 0 auto;
  padding: 18px 28px;
  gap: 20px;
  backdrop-filter: saturate(100%) blur(10px);
  position: fixed;
  left: 0%;
  top: 2%;
  right: 0%;
  bottom: auto;
  background-color: rgb(18 18 18 / 80%);
  z-index: 4;
  border-radius: 4px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${props =>
    props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)'};
  transition: color 0.3s ease;

  &.selected {
    color: rgba(255, 255, 255, 1);
    opacity: 1;
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
    <Link href="/reading">
      <NavItem>Reading</NavItem>
    </Link>
    <Link href="/bookmarks">
      <NavItem>Bookmarks</NavItem>
    </Link>
  </Nav>
);

export default Navigation;
