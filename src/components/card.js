import React from 'react';
import styled from 'styled-components/macro';

const CardWrapper = styled.div`
  max-width: 23rem;
  padding: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function Card({ children, ...rest }) {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
}

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`;

Card.Image = function CardImage({ src, ...rest }) {
  return <Image src={src} {...rest} />;
}

const Content = styled.div`
  margin-top: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);

  & > * {
    text-align: center;
  }
`;

Card.Content = function CardContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
}

const Heading = styled.h3`
  font-size: clamp(1.125rem, 1.09rem + 0.18vw, 1.25rem);
  line-height: 1.2;
  font-weight: 600;
  max-width: 30ch;
`;

Card.Heading = function CardHeading({ children, ...rest }) {
  return <Heading {...rest}>{children}</Heading>;
}

const Text = styled.p`
  font-size: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  color: var(--color-text-${({ color }) => color});
  max-width: 70ch;

  margin-top: 1em;
`;

Card.Text = function CardText({ children, ...rest }) {
  return <Text {...rest} color="teriary">{children}</Text>;
}