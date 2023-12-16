import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  height: 100vh;

  #bg-charts {
    width: 78%;
    height: 68%;
    margin: 80px auto;
    // display: grid;
    // overflow: hidden;
    // filter: saturate(2);
    // grid-template-columns: repeat(10, 1fr);
    // grid-template-rows: repeat(7, 1fr);
    border: 1px solid var(--opacity-white-color-soft);
  }

  .color-box {
    z-index: 50;
    filter: brightness(1.1);
    transition: 1.5s ease, transform 0.3s;
    position: relative;
    background: transparent;
    // border: 1px solid #1818189d;
  }

  .color-box:hover {
    background: var(--primary-color);
    transition-duration: 0s;
    transform: scale(1.05);
    transition-duration: 0.3s;
  }

  .title {
    font-size: 1rem;
  }
  
  .slide-in-right {
    animation: slide-in-right 1s ease-out;
  }
  
  .slide-in-left {
    animation: slide-in-left 1s ease-out;
  }

  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateZ(-1400px) translateX(1000px);
      transform: translateZ(-1400px) translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateZ(-1400px) translate(-1000px);
      transform: translateZ(-1400px) translate(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translate(0);
      transform: translateZ(0) translate(0);
      opacity: 1;
    }
  }

  @media (min-width: 320px) and (max-width: 399px) {
    #bg-charts {
      width: 90%;
      height: 35%;
      margin: 20px auto;
    }
  }

  @media (min-width: 400px) and (max-width: 669px) {
    #bg-charts {
      width: 90%;
      height: 40%;
      margin: 20px auto;
    }
  }

  // @media (min-width: 670px) and (max-width: 1400px) {
  // }
`;
// box-shadow: rgba(40,40,40,1) 0px 3px 5px;

// @media (max-width: 450px) {
//   width: 90%;
//   height: 35%;
//   top: 27%;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: repeat(7, 1fr);
// }

// @media (max-width: 650px) and (min-width: 451px) {
//   width: 90%;
//   height: 50%;
//   top: 37%;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: repeat(7, 1fr);
// }

// @media (max-width: 850px) and (min-width: 651px) {
//   width: 90%;
//   height: 60%;
//   top: 40%;
// }
