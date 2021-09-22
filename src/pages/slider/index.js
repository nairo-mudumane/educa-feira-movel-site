import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';
import Welcome from '../home';
import Info from '../info/';
import Quiz from '../quiz/';

const StyledSlider = styled.div`
  max-height: 80vh;

  /* animation: slider 6s linear infinite; */

  @keyframes slider {
    0% {
      margin-top: -160vh;
    }
    10% {
      margin-top: -160vh;
    }
    20% {
      margin-top: -160vh;
    }
    30% {
      margin-top: -160vh;
    }
    30% {
      margin-top: 0vh;
    }
    65% {
      margin-top: 0vh;
    }
    70% {
      margin-top: 80vh;
    }
    100% {
      margin-top: 0;
    }
  }
`;

export default function Slider() {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <Main>
      <Body>
        <StyledSlider>
          <Carousel>
            <Welcome />
            <Info />
            <Quiz />
          </Carousel>
        </StyledSlider>
      </Body>
    </Main>
  );
}

/* 

React.useEffect(() => {
    const interval = setInterval(() => {
      // if (count >= hrefs.length) {
      //   setCount((count) => (count = -1));
      // }
      setCount((count) => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

*/