import React from 'react';
import styled from 'styled-components/macro';
import { Section, Headline } from '../components/section';

const ContentWrapper = styled.div`
  margin-top: clamp(2.75rem, 3.21rem + 2.68vw, 5.625rem);
  max-width: 26rem;
  margin-inline: auto;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);

`;

const Input = styled.input`
  color: var(--color-text-primary);

  padding: 0.8rem;
  border: 1px solid var(--color-line-primary);
  border-radius: 8px;
  min-width: 100%;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &::placeholder {
    color: var(--color-text-primary);
  }

`;

const SubscribeButton = styled.button`
  color: var(--color-text-quaternary);
  font-weight: 600;

  background-color: var(--color-bg-quaternary);

  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
    transition: 0.7s;
  }
`;

export default function SubscribeContainer({ children, ...rest }) {
  return (
    <Section>
      <Headline>
        <Headline.Title>Subscribe Newsletter</Headline.Title>
        <Headline.Text>financial transactions remotely using a mobile</Headline.Text>
      </Headline>
      <ContentWrapper>
        <Input type="text" placeholder="Enter your email" />
        <SubscribeButton>Get Started</SubscribeButton>     
      </ContentWrapper>
    </Section>
  );
}
