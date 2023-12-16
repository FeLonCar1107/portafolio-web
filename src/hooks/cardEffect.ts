export const useCardEffect = () => {
  const CARD_PROJECT = document.querySelector(".card-project") as HTMLElement;
  const CARDS = document.querySelectorAll(".card-main") as NodeListOf<HTMLElement>;

  const CONFIG = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  const UPDATE = (event: MouseEvent) => {
    for (const CARD of CARDS) {
      const CARD_BOUNDS = CARD.getBoundingClientRect();
      if (
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        // If within proximity set the active opacity
        CARD.style.setProperty("--active", "1");
      } else {
        CARD.style.setProperty("--active", CONFIG.opacity.toString());
      }
      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];
      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      CARD.style.setProperty("--start", (ANGLE + 90).toString());
    }
  };

  document.body.addEventListener("pointermove", UPDATE);

  const STYLE = () => {
    CARD_PROJECT.style.setProperty("--gap", CONFIG.gap.toString());
    CARD_PROJECT.style.setProperty("--blur", CONFIG.blur.toString());
    CARD_PROJECT.style.setProperty("--spread", CONFIG.spread.toString());
    CARD_PROJECT.style.setProperty(
      "--direction",
      CONFIG.vertical ? "column" : "row"
    );
  };

  STYLE();
};
