import { useEffect } from "react";
import homeData from "../data/home.data";
import useFabricBoxes from "../hooks/shineEffect";
import useTypingEffect from "../hooks/typingEffect";
import { StyledHome } from "../styled-components/StyledHome";
// import BackgroundAnimated from "../styled-components/BackgroundAnimated";

const Home = () => {
  const { displayText, showCursor } = useTypingEffect(homeData.title);

  useEffect(() => {
    const windowSize = window.innerWidth;
    const chartsLength = windowSize < 650 ? 63 : 70;
    useFabricBoxes(chartsLength);
  }, []);

  return (
    <StyledHome id="">
      <div className="container">
        <div id="bg-charts">
          {/* <BackgroundAnimated /> */}
          <h2 className="title">
            {displayText}
            {showCursor && "|"}
          </h2>
          <h2 className="title">{homeData.subtitle}</h2>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
