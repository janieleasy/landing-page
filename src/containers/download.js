import React from 'react';
import styled from 'styled-components/macro';
import { Section, Headline } from '../components/section';

import { ReactComponent as AppStore } from '../assets/svg/download_appstore.svg';
import { ReactComponent as PlayStore } from '../assets/svg/download_playstore.svg';

const SectionWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0 50%;
    transform: translateX(-50%);
    height: 1px;
    width: clamp(16rem, 85vw, 85rem);
    background-color: var(--color-line-secondary);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 100% 50%;
    transform: translateX(-50%);
    height: 1px;
    width: clamp(16rem, 85vw, 85rem);
    background-color: var(--color-line-secondary);
  }
`;

const Switcher = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  gap: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);

  align-items: center;

  & > * {
    flex-grow: 1;
    flex-basis: calc( (50rem - 100%) * 999 );
  }

`;

const ImageWrapper = styled.div`
  display: block;

  height: auto;
  width: 100%;
  max-width: 28rem;
  aspect-ratio: 3 / 5;
  margin-inline: auto;

  position: relative;

  .mycards_card {
    width: 30%;
    height: auto;

    position: absolute;
    inset: 50% 50%;

    -webkit-transform: translate(122%, -114%);
    transform: translate(122%, -114%);
    opacity: 0;

    transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;
  }

  .mycards_transaction {
    width: 58%;
    height: auto;

    position: absolute;
    inset: 50% 50%;

    -webkit-transform: translate(-127%, -110%);
    transform: translate(-127%, 110%);
    opacity: 0;

    transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;

  }

  &.appear .mycards_card {
    -webkit-transform: translate(72%, -114%);
    transform: translate(72%, -114%);
    opacity: 1;
  }

  &.appear .mycards_transaction {
    -webkit-transform: translate(-77%, 110%);
    transform: translate(-77%, 110%);
    opacity: 1;
  }

  .carddetail_transaction {
    width: 58%;
    height: auto;

    position: absolute;
    inset: 50% 50%;

    -webkit-transform: translate(-127%, 55%);
    transform: translate(-127%, 55%);
    opacity: 0;

    transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;

  }

  &.appear .carddetail_transaction {
    -webkit-transform: translate(-77%, 55%);
    transform: translate(-77%, 55%);
    opacity: 1;
  }

`;

const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;
  object-fit: contain;

`;


const Button = styled.button`
  color: var(--color-text-primary);
  font-weight: 600;
  border: 1px solid var(--color-line-primary);

  background-color: var(--color-bg-primary);
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;

  &.btn-store {
    border-radius: 1rem;
  }

  &.app-store:hover {
    border: 1px solid var(--color-active-green);
    color: var(--color-active-green);

    path {
      fill: var(--color-active-green);
    }
  }

  &.play-store:hover {
    border: 1px solid var(--color-active-blue);
    color: var(--color-active-blue);

    path {
      fill: var(--color-active-blue);
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  &:hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
    transition: 0.7s;
  }
`;


export default function DownloadContainer({ children, ...rest }) {

  const mycardsEl = React.useRef(null);
  const carddetailEl = React.useRef(null);

  // console.log(mycardsEl.current);
  // console.log(carddetailEl.current);

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
      
  }, { threshold: 0, rootMargin: "0px 0px -60% 0px" })


  React.useEffect(() => {
    const mycardsElement = mycardsEl.current;
    const carddetailElement = carddetailEl.current;

    appearOnScroll.observe(mycardsElement);
    appearOnScroll.observe(carddetailElement)

    return () => {
      if (mycardsElement) {
        appearOnScroll.unobserve(mycardsElement);
      }

      if (carddetailElement) {
        appearOnScroll.unobserve(carddetailElement);
      }
    }
  });

  return (
    <SectionWrapper>
      <Section>
        <Switcher direction="row-reverse">
          <Headline>
            <Headline.Title>Download mobile App</Headline.Title>
            <Headline.Text>Download Besnik mobile banking app for IOS and android. It helps you banking quickly and more smartly.</Headline.Text>
            <Headline.Action>
              <Button className="btn-store app-store">
                <span>
                  <AppStore />
                  App Store
                </span>
              </Button>
              <Button className="btn-store play-store">
                <span>
                  <PlayStore />
                  Play Store
                </span>
              </Button>
            </Headline.Action>
          </Headline>
          <div>
            <ImageWrapper ref={mycardsEl}>
              <img className="mycards_card" src="/images/misc/download_slide_01.png" alt="my card item" />
              <img className="mycards_transaction" src="/images/misc/download_slide_02.png" alt="today transaction item" />
              <Image  src="/images/misc/download_mycards.png" alt="app my card page" />
            </ImageWrapper>
          </div>
        </Switcher>
      </Section>
      <Section>
        <Switcher direction="row">
          <Headline>
            <Headline.Title>Connecting all your banking needs</Headline.Title>
            <Headline.Text>Financial transactions remotely using a mobile device such as a smartphone or tablet.</Headline.Text>
            <Headline.Action>
              <Button>Get Started</Button>
            </Headline.Action>
          </Headline>
          <div >
            <ImageWrapper ref={carddetailEl}>
              <img className="carddetail_transaction" src="/images/misc/download_slide_03.png" alt="monthly transaction item" />
              <Image  src="/images/misc/download_carddetail.png" alt="app card detail page" />
            </ImageWrapper>
          </div>
        </Switcher>
      </Section>
    </SectionWrapper>
  );
}
