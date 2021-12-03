import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const ListWrapper = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  margin-top: 0.5rem;
  max-width: 20ch;
`;

export function List({ children, ...rest }) {
  return <ListWrapper {...rest}>{children}</ListWrapper>;
}

List.Item = function ListItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>
}

const StyledMediaLink = styled(Link)`
  display: inline-flex;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin-right: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  background-color: var(--color-bg-teriary);
`;

export function MediaLink({ to, children, ...rest }) {
  return <StyledMediaLink to={to} {...rest}>{children}</StyledMediaLink>;
}

const StyledListLink = styled(Link)`
  font-size: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  color: var(--color-text-secondary);

  &:not(:hover) {
    text-decoration: none;
  }
`;

export function ListLink({ to, children, ...rest }) {
  return <StyledListLink to={to} {...rest}>{children}</StyledListLink>;
}

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);

  & div:first-of-type ul li:not(:first-of-type) {
    margin-top: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  }
`;

const Title = styled.h4`
  font-size: clamp(1.125rem, 1.09rem + 0.18vw, 1.25rem);
  font-weight: 600;
  color: var(--color-text-primary);
  max-width: 30ch;
`;

export function Nav({ children, ...rest }) {
  return <NavWrapper {...rest}>{children}</NavWrapper>
}

Nav.Title = function NavTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
}



const AuthorNavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  margin-top: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
`;

const AuthorText = styled.p`
  font-size: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  color: var(--color-text-secondary);


  &:first-of-type {
    min-width: 50ch;
  }

`;

export function AuthorNav({ children, ...rest }) {
  return <AuthorNavWrapper {...rest}>{children}</AuthorNavWrapper>
}

AuthorNav.Text = function AuthorNav({ children, ...rest }) {
  return <AuthorText {...rest}>{children}</AuthorText>
}