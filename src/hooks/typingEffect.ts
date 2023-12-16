import { useEffect, useState } from "react";

const useTypingEffect = (text: string, delay = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timer: number;

    const handleTyping = () => {
      setDisplayText((prevText) => {
        if (prevText.length === text.length) {
          clearInterval(timer);
          setShowCursor(false);
          return prevText;
        } else {
          return text.substring(0, prevText.length + 1);
        }
      });
    };

    timer = setInterval(handleTyping, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return { displayText, showCursor };
};

export default useTypingEffect;
