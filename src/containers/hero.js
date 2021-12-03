import React from 'react';
import styled from 'styled-components/macro';

const HeroWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex-grow: 1;
    flex-basis: calc((50rem - 100%) * 999);
  }

  @media (min-width: 100em) {
    width: clamp(16rem, 95vw, 85rem);
    max-width: 100%;
    margin-inline: auto;
  }
`;

const HeroCluster = styled.div`
  background-color: var(--color-bg-secondary);

  padding-block: clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem);
`;

const Wrapper = styled.div`
  padding-inline: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
`;

const HeroContent = styled.div`
  max-width: 26ch;
  margin-block-start: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);
`;

const EyeBrow = styled.span`
  font-size: clamp(1rem, 0.96rem + 0.18rem, 1.125rem);
  line-height: 1.7rem;
`;

const Title = styled.h1`
  font-size: clamp(1.75rem, 1.39rem + 1.79vw, 3rem);
  line-height: 1.4;
`;

const Text = styled.p`
  color: var(--color-text-secondary);
  margin-top: 1rem;
`;

const Button = styled.button`
  color: var(--color-text-quaternary);
  font-weight: 600;

  background-color: var(--color-bg-quaternary);

  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  margin-top: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);

  position: relative;


  &:hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
    transition: 0.7s;
  }
`;

const HeroImageCluster = styled.div`
  position: relative;
`;

const HeroBgImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
`;

const ImageOneWrapper = styled.div`
  display: block;
  width: 23%;
  height: 25%;

  position: absolute;
  inset: 50% 50%;
  transform: translate(-150%, -157%);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

    -webkit-animation: 2s linear 0s infinite alternate image_01_move;
    animation: 2s linear 0s infinite alternate image_01_move;
    animation-play-state: paused;
  }

  @-webkit-keyframes image_01_move { 
    from { 
      -webkit-transform: translateY(-3%);
      transform: translateY(-3%);
    } 
    to { 
      -webkit-transform: translateY(3%);
      transform: translateY(3%);
    }
  }

  @keyframes image_01_move { 
    from { 
      -webkit-transform: translateY(-3%);
      transform: translateY(-3%);
    } 
    to { 
      -webkit-transform: translateY(3%);
      transform: translateY(3%);
    }
  }
`;

const ImageTwoWrapper = styled.div`
  display: block;
  width: 39%;
  height: 9%;

  position: absolute;
  inset: 50% 50%;
  transform: translate(-5%, -380%);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

    -webkit-animation: 2s linear 0s infinite alternate image_02_move;
    animation: 2s linear 0s infinite alternate image_02_move;
    animation-play-state: paused;
  }

  @-webkit-keyframes image_02_move { 
    from { 
      -webkit-transform: translateX(-3%);
      transform: translateX(-3%);
    } 
    to { 
      -webkit-transform: translateX(3%);
      transform: translateX(3%);
    }
  }

  @keyframes image_02_move { 
    from { 
      -webkit-transform: translateX(-3%);
      transform: translateX(-3%);
    } 
    to { 
      -webkit-transform: translateX(3%);
      transform: translateX(3%);
    }
  }
`;

const ImageThreeWrapper = styled.div`
  display: block;
  width: 28%;
  height: 19%;

  position: absolute;
  inset: 50% 50%;
  transform: translate(-138%, 70%);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

    -webkit-animation: 2s linear 0s infinite alternate image_03_move;
    animation: 2s linear 0s infinite alternate image_03_move;
    animation-play-state: paused;
  }

  @-webkit-keyframes image_03_move { 
    from { 
      -webkit-transform: translateX(3%);
      transform: translateX(3%);
    } 
    to { 
      -webkit-transform: translateX(-3%);
      transform: translateX(-3%);
    }
  }

  @keyframes image_03_move { 
    from { 
      -webkit-transform: translateX(3%);
      transform: translateX(3%);
    } 
    to { 
      -webkit-transform: translateX(-3%);
      transform: translateX(-3%);
    }
  }
`;

const ImageFourWrapper = styled.div`
  display: block;
  width: 36%;
  height: 40%;

  position: absolute;
  inset: 50% 50%;
  transform: translate(-50%, -50%);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

    -webkit-animation: 2s linear 0s infinite alternate image_04_move;
    animation: 2s linear 0s infinite alternate image_04_move;
    animation-play-state: paused;
  }

  @-webkit-keyframes image_04_move { 
    from { 
      -webkit-transform: translateY(1%);
      transform: translateY(1%);
    } 
    to { 
      -webkit-transform: translateY(-1%);
      transform: translateY(-1%);
    }
  }

  @keyframes image_04_move { 
    from { 
      -webkit-transform: translateY(1%);
      transform: translateY(1%);
    } 
    to { 
      -webkit-transform: translateY(-1%);
      transform: translateY(-1%);
    }
  }
`;

const ImageFiveWrapper = styled.div`
  display: block;
  width: 26%;
  height: 29%;

  position: absolute;
  inset: 50% 50%;
  transform: translate(47%, 30%);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

    -webkit-animation: 2s linear 0s infinite alternate image_05_move;
    animation: 2s linear 0s infinite alternate image_05_move;
    animation-play-state: paused;
  }

  @-webkit-keyframes image_05_move { 
    from { 
      -webkit-transform: translateY(3%);
      transform: translateY(3%);
    } 
    to { 
      -webkit-transform: translateY(-3%);
      transform: translateY(-3%);
    }
  }

  @keyframes image_05_move { 
    from { 
      -webkit-transform: translateY(3%);
      transform: translateY(3%);
    } 
    to { 
      -webkit-transform: translateY(-3%);
      transform: translateY(-3%);
    }
  }
`;

export default function HeroContainer() {
  const animationEl01 = React.useRef(null);
  const animationEl02 = React.useRef(null);
  const animationEl03 = React.useRef(null);
  const animationEl04 = React.useRef(null);
  const animationEl05 = React.useRef(null);


  React.useEffect(() => {
    setTimeout(() => {
      animationEl01.current.style.animationPlayState = 'running';
      animationEl02.current.style.animationPlayState = 'running';
      animationEl03.current.style.animationPlayState = 'running';
      animationEl04.current.style.animationPlayState = 'running';
      animationEl05.current.style.animationPlayState = 'running';
    }, 1000);

  }, []);
  return (
    <HeroWrapper>
      <HeroCluster>
        <Wrapper>
          <EyeBrow>30 Days free trial</EyeBrow>
          <HeroContent>
            <Title>Life Should Be Easy.</Title>
            <Text>financial transactions remotely using a mobile device such as a smartphone or tablet.</Text>
            <Button>Get Started</Button>
          </HeroContent>
        </Wrapper>
      </HeroCluster>
      <HeroImageCluster>
        <HeroBgImage src="/images/misc/hero_bg.png" alt="hero_background" />
        <ImageOneWrapper>
          <img ref={animationEl01} src="/images/misc/hero_01.png" alt="hero_image_01" />
        </ImageOneWrapper>
        <ImageTwoWrapper>
          <img ref={animationEl02} src="/images/misc/hero_02.png" alt="hero_image_02" />
        </ImageTwoWrapper>
        <ImageThreeWrapper>
          <img ref={animationEl03} src="/images/misc/hero_03.png" alt="hero_image_03" />
        </ImageThreeWrapper>
        <ImageFourWrapper>
          <img ref={animationEl04} src="/images/misc/hero_04.png" alt="hero_image_04" />
        </ImageFourWrapper>
        <ImageFiveWrapper>
          <img ref={animationEl05} src="/images/misc/hero_05.png" alt="hero_image_05" />
        </ImageFiveWrapper>
      </HeroImageCluster>
    </HeroWrapper>
  )
}