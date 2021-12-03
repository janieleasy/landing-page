import React from 'react';
import styled from 'styled-components/macro';

import { MediaLink, ListLink } from '../components/footer.js';

import logo from '../logo.svg';
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg';
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg';

const FooterWrapper = styled.footer`
  padding: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  background-color: var(--color-bg-secondary);

  display: flex;
  flex-direction: column;
  gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);

  @media (min-width: 100em) {
    width: clamp(16rem, 95vw, 85rem);
    max-width: 100%;
    margin-inline: auto;
  }
`;

const Text = styled.p`
  font-size: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  color: var(--color-text-secondary);
`;


const NavWrapper = styled.nav`
  display: grid;
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);


  @media (min-width: 50em) {
    grid-template-columns: repeat(5, 1fr);

    div:first-of-type {
      grid-column: span 2;
    }
  }

`;

const List = styled.ul`
  list-style: none;

  li {
    display: block;
    margin-top: 0.5rem;
  }
`;

const Title = styled.h4`
  font-size: clamp(1.125rem, 1.09rem + 0.18vw, 1.25rem);
  font-weight: 600;
  color: var(--color-text-primary);
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  p:first-of-type {
    width: 40ch;
  }
`;

export default function FooterContainer() {
  return (
    <FooterWrapper>
      <NavWrapper>
        <div>
          <List>
            <li><img src={logo} alt="besnik link" /></li>
            <li><Text style={{ maxWidth: '40ch' }}>financial transactions remotely using a mobile device such as a smartphone or tablet.</Text></li>
            <li>
              <MediaLink to="#"><Facebook /></MediaLink>
              <MediaLink to="#"><Twitter /></MediaLink>
              <MediaLink to="#"><Linkedin /></MediaLink>
            </li>
          </List>
        </div>
        <div>
          <Title>Besnik</Title>
          <List>
            <li><ListLink to="#">About</ListLink></li>
            <li><ListLink to="#">Terms of Use</ListLink></li>
            <li><ListLink to="#">Privacy Policy</ListLink></li>
            <li><ListLink to="#">How it Works</ListLink></li>
            <li><ListLink to="#">Contact Us</ListLink></li>
          </List>
        </div>
        <div>
          <Title>Support</Title>
          <List>
            <li><ListLink to="#">Support Center</ListLink></li>
            <li><ListLink to="#">24h Service</ListLink></li>
            <li><ListLink to="#">Quick Chat</ListLink></li>
          </List>
        </div>
        <div>
          <Title>Contact</Title>
          <List>
            <li><ListLink to="#">WhatsApp</ListLink></li>
            <li><ListLink to="#">Support</ListLink></li>
          </List>
        </div>
      </NavWrapper>

      <AuthorWrapper>
        <Text>Copyright © 2021 Lobar.net</Text>
        <Text>Developed by Janie</Text>
      </AuthorWrapper>
    </FooterWrapper>
  )
}