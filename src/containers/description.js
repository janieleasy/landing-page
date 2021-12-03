import React from 'react';
import styled from 'styled-components/macro';
import { Section, Headline } from '../components/section';
import { Card } from '../components/card';

const ContentWrapper = styled.div`
  margin-top: clamp(2.75rem, 3.21rem + 2.68vw, 5.625rem);


  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);



  @media (min-width: 50em) {
    height: auto;

    display: grid;
    grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled.div`
  height: 14rem;

  position: relative;

  .info, .data, .card {
    width: 100%;
    transform: none;
    transition: transform 200ms linear;

    position: absolute;
    inset: 50% 50%;

  }

  .info {
    transform: translate(-50%, 73%);
    opacity: 0;

    transition: opacity 250ms ease-in, transform 400ms ease-in;
  }

  .data {
    transform: translate(-50%, -136%);
    opacity: 0;

    transition: opacity 250ms ease-in, transform 400ms ease-in;
  }

  .card {
    transform: translate(-50%, 15%);
    opacity: 0;

    transition: opacity 250ms ease-in, transform 400ms ease-in;
  }

  &.appear .info {
    transform: translate(-50%, 33%);
    opacity: 1;
  }

  &.appear .data {
    transform: translate(-50%, -96%);
    opacity: 1;
  }

  &.appear .card {
    transform: translate(-50%, -25%);
    opacity: 1;
  }

  &.appear:hover .info {
    transform: translate(-50%, 33%) scale(1.1);
  }

  &.appear:hover .data {
    transform: translate(-50%, -96%) scale(1.1);
  }

  &.appear:hover .card {
    transform: translate(-50%, -25%) scale(1.1);
  }

`;

export default function DescriptionContainer({ children, ...rest }) {
  const infoEl = React.useRef(null);
  const dataEl = React.useRef(null);
  const cardEl = React.useRef(null);

  // console.log('infoEl', infoEl.current);
  // console.log('dataEl', dataEl.current);
  // console.log('cardEl', cardEl.current);

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // console.log('false');
        entry.target.classList.remove('appear');

        // return;
      } else {
        entry.target.classList.add('appear');
        // console.log('true', entry.target);
      }
    })
      
  }, { threshold: 0, rootMargin: "0px 0px -30% 0px" })


  React.useEffect(() => {
    const infoElement = infoEl.current;
    const dataElement = dataEl.current;
    const cardElement = cardEl.current;

    appearOnScroll.observe(infoElement);
    appearOnScroll.observe(dataElement)
    appearOnScroll.observe(cardElement)

    return () => {
      if (infoElement) {
        appearOnScroll.unobserve(infoElement);
      }

      if (dataElement) {
        appearOnScroll.unobserve(dataElement);
      }

      if (cardElement) {
        appearOnScroll.unobserve(cardElement);
      }
    }
  });


  return (
    <Section>
      <Headline>
        <Headline.Title>How it works</Headline.Title>
        <Headline.Text>Mobile banking differs from mobile payments, which involves the use of a mobile device.</Headline.Text>
      </Headline>
      <ContentWrapper>
        <Card>
          <ImageWrapper ref={infoEl}>
            <img className="info" src="/images/misc/desc_info_hover.png" alt="information"/>
            <Card.Image src="/images/misc/desc_info.png" alt="information" />
          </ImageWrapper>
          <Card.Content>
            <Card.Heading>Information</Card.Heading>
            <Card.Text>Enter your information ensure your details safe and more secure.</Card.Text>
          </Card.Content>
        </Card>
        <Card>
          <ImageWrapper ref={dataEl}>
            <img className="data" src="/images/misc/desc_data_hover.png" alt="data secure" />
            <Card.Image src="/images/misc/desc_data.png" alt="data secure" />
          </ImageWrapper>
          <Card.Content>
            <Card.Heading>Data Secure</Card.Heading>
            <Card.Text>Sending money faster and easier with end to end encryption.</Card.Text>
          </Card.Content>
        </Card>
        <Card>
          <ImageWrapper ref={cardEl}>
            <img className="card" src="/images/misc/desc_card_hover.png" alt="add cards" />
            <Card.Image src="/images/misc/desc_card.png" alt="add cards" />
          </ImageWrapper>
          <Card.Content>
            <Card.Heading>Add Cards</Card.Heading>
            <Card.Text>Add multiple cards and track your daily expense with quality interface.</Card.Text>
          </Card.Content>
        </Card>     
      </ContentWrapper>
    </Section>
  );
}
