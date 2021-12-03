import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as Menu } from '../assets/svg/menu.svg';
import { ReactComponent as Close } from '../assets/svg/close.svg';

// styled icon
const StyledLogo = styled(Logo)`
  display: block;
`;

const StyledMenu = styled(Menu)`
  display: block;
  width: 1em;
  height: 1em;
  min-width: 1.5rem;
  min-height: 1.5rem;
`;

const StyledClose = styled(Close)`
  display: block;
  width: 1em;
  height: 1em;
  min-width: 1.5rem;
  min-height: 1.5rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-bg-primary);

  min-height: 4rem;
  padding: 0 clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  line-height: 1;

  @media (min-width: 100em) {
    width: clamp(16rem, 95vw, 85rem);
    max-width: 100%;
    margin-inline: auto;
  }
`;

const HeaderCluster = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const MenuButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  font: inherit;
  cursor: pointer;

  @media (min-width: 50em) {
    display: none;
  }
`;

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  line-height: 1.2;
  font-weight: 600;

  color: var(--color-${({ color }) => color});
  background-color: var(--color-${({ bg }) => bg});

  display: inline-flex;
  justify-content: center;
  padding: 0.5em 0;
  min-width: 5.375rem;
  border-radius: 6px;
`;

const CloseButton = styled.button`
  position: absolute;
  inset: 1.25rem clamp(1.375rem, 1.2rem + 0.89vw, 2rem) auto auto;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NavLinksWrapper = styled.nav`
  height: 100%;
  min-width: 16rem;
  padding: 4.5rem 0 0 0;
  top: 0;
  left: 0;

  @media (min-width: 50em) {
    display: flex;
    padding: unset;
    height: unset;
  }
`;

const NavigationDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  pointer-events: ${({ open }) => open ? 'auto' : 'none'};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    opacity: ${({ open }) => open ? 1 : 0};
  }

  ${NavLinksWrapper} {
    background-color: var(--color-bg-primary);
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.4);
    position: relative;
    width: 16rem;
    transform: ${({ open }) => open ? 'none' : 'translateX(-110%)'};
    transition: transform 200ms linear;
  }

  ${CloseButton} {
    display: ${({ open }) => open ? 'block' : 'none'};
  }

  @media (min-width: 50em) {
    position: static;
    width: auto;
    pointer-events: auto;

    &::before {
      display: none;
    }

    ${NavLinksWrapper} {
      box-shadow: none;
      width: unset;
      transform: none;
      transition: none;
    }
  }
`;


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-secondary);
  display: block;
  padding: 1.5em 1.25rem;

  &:hover,
  &:active {
    background-color: var(--color-bg-secondary);
  }

  @media (min-width: 50em) {
    display: inline-block;
  }
`;


export default function HeaderContainer() {
  const [modal, setModal] = useState(false);
 
  return (
    <HeaderWrapper>
      <HeaderCluster>
        <MenuButton onClick={() => setModal(true)}>
          <StyledMenu />
        </MenuButton>
        <Link to="/">
          <StyledLogo />
        </Link>
      </HeaderCluster>

      <NavigationDrawer open={modal}>
        <NavLinksWrapper>
          <StyledNavLink to="/">Business</StyledNavLink>
          <StyledNavLink to="/">Pricing</StyledNavLink>
          <StyledNavLink to="/">Features</StyledNavLink>
          <StyledNavLink to="/">About</StyledNavLink>
          <CloseButton onClick={() => setModal(false)} >
            <StyledClose />
          </CloseButton>   
        </NavLinksWrapper>
      </NavigationDrawer>

      <HeaderCluster>
        {/* <StyledButtonLink to="/protected" color="text-primary" bg="bg-primary">Log in</StyledButtonLink> */}
        <StyledButtonLink to="/protected" color="text-quaternary" bg="bg-quaternary">Log in</StyledButtonLink>
      </HeaderCluster>
    </HeaderWrapper>
  )
}
