import React from 'react';
import styled from 'styled-components/macro';

const SectionWrapper= styled.section`
  padding-block: clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem);
`;

const Wrapper = styled.div`
  width: clamp(16rem, 95vw, 85rem);
  max-width: 100%;
  margin-inline: auto;
  padding-inline: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
`

export function Section({ children, ...rest }) {
  return (
    <SectionWrapper {...rest}>
      <Wrapper>{children}</Wrapper>
    </SectionWrapper>
  );
}


const HeadlineWrapper= styled.div`
  & > * {
    text-align: center;
    margin-inline: auto;
  }
`;

export function Headline({ children, ...rest }) {
  return <HeadlineWrapper {...rest}>{children}</HeadlineWrapper>;
}

const Title = styled.h2`
  font-size: clamp(1.5rem, 1.29rem + 1.07vw, 2.25rem);

  line-height: 1.2;
  font-weight: 600;
  max-width: 30ch;
`;

Headline.Title = function HeadlineTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
}

const Text = styled.p`
  color: var(--color-text-${({ color }) => color});
  max-width: 70ch;

  margin-top: 1em;
`;

Headline.Text = function HeadlineText({ children, ...rest }) {
  return <Text {...rest} color="secondary">{children}</Text>;
}

const Action = styled.div`
  margin-top: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.75rem,0.71rem + 0.18vw,0.875rem);
  
`;

Headline.Action = function HeadlineAction({ children, ...rest }) {
  return <Action {...rest}>{children}</Action>;
}

const PatternsWrapper= styled.div`
  margin-top: clamp(2.75rem, 3.21rem + 2.68vw, 5.625rem);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);

`;

export function Patterns({ children, ...rest }) {
  return <PatternsWrapper {...rest}>{children}</PatternsWrapper>;
}

