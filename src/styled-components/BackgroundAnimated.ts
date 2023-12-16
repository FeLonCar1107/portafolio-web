import styled, { keyframes } from 'styled-components';

const unicornSlide = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const BackgroundAnimated = styled.body`
  background-image: linear-gradient(-10deg, #f10d5e 0%, #ffb43e 25%, #43e03c 50%, #6528ff 100%);
  animation: ${unicornSlide} 10s ease infinite;
  -webkit-animation: ${unicornSlide} 10s ease infinite;
  background-size: 200% 200%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;

export default BackgroundAnimated;
