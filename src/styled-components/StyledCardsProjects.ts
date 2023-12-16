import styled from "styled-components";

export const StyledCardsProjects = styled.div`
  --bg: hsl(246 44% 7%);
  --border: hsl(280 10% 50% / 1);
  --card: hsl(237 36% 10%);
  --color: hsl(240 18% 80%);
  --border-width: 2px;
  --border-radius: 15px;

  @property --start {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  margin-top: 2rem;
  width: 100%;
  position: relative;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .card-project {
    --spread: 60;
    display: flex;
    flex-wrap: wrap;
    flex-direction: var(--direction);
    gap: calc(var(--gap) * 1px);
    position: relative;
    padding: 2rem;
    touch-action: none;
  }

  article {
    --active: 0.15;
    --start: 0;
    height: 350px;
    background: var(--base-color-soft);
    padding: 1.7rem;
    aspect-ratio: 330 / 400;
    border-radius: var(--border-radius);
    min-width: 280px;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 15pxrem;
    position: relative;
    border: 1px solid var(--opacity-white-color-soft);
    transition: transform 0.3s ease-in-out; // Add this line

    &:hover {
      transform: scale(1.02); // Add this block
    }
    
    .img-preview {
      width: 100%;
      height: 60%;
      position: relative;
      
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        position: absolute;
        object-fit: cover;
        pointer-events: none;
        filter: brightness(0.75);
      }
    }

    .card-content {
      height: 40%;
      display: flex;
      flex-direction: column;
      
      .card-title {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: start;
        font-family: var(--font-family-bold);
        font-size: var(--font-size-xl);
      }
      
      .card-description {
        width: 100%;
        height: 60%;
        
        p {
          width: 100%;
          height: 80%;
          overflow: hidden;
          font-size: var(--font-size-sm);
          font-family: var(--font-family-light);
          // text-overflow: ellipsis;
          // display: -webkit-box;
          // -webkit-line-clamp: 4;
          // -webkit-box-orient: vertical;
        }

        a {
          width: 100%;
          height: 20%;
          color: var(--color);
          text-decoration: none;
          opacity: 0.5;
          display: inline-block;
          align-self: start;
          transition: opacity 0.2s;
        }

        a:is(:hover, :focus-visible) {
          opacity: 1;
        }
      }
    }
  }

  article:is(:hover, :focus-visible) {
    z-index: 2;
  }

  .glows {
    pointer-events: none;
    position: absolute;
    inset: 0;
    filter: blur(calc(var(--blur) * 1px));
  }

  .glows::after,
  .glows::before {
    --alpha: 0;
    content: "";
    background: var(--gradient);
    background-attachment: fixed;
    position: absolute;
    inset: -5px;
    border: 10px solid transparent;
    border-radius: var(--border-radius);
    mask: linear-gradient(#0000, #0000),
      conic-gradient(
        from calc((var(--start) - (var(--spread) * 0.5)) * 1deg),
        #000 0deg,
        #fff,
        #0000 calc(var(--spread) * 1deg)
      );
    mask-composite: intersect;
    mask-clip: padding-box, border-box;
    opacity: var(--active);
    transition: opacity 1s;
  }

  article::before {
    position: absolute;
    inset: 0;
    border: var(--border-width) solid transparent;
    content: "";
    border-radius: var(--border-radius);
    pointer-events: none;
    background: var(--border);
    background-attachment: fixed;
    border-radius: var(--border-radius);
    mask: linear-gradient(#0000, #0000),
      conic-gradient(
        from
          calc(
            ((var(--start) + (var(--spread) * 0.25)) - (var(--spread) * 1.5)) *
              1deg
          ),
        hsl(0 0% 100% / 0.15) 0deg,
        white,
        hsl(0 0% 100% / 0.15) calc(var(--spread) * 2.5deg)
      );
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
    opacity: var(--active);
    transition: opacity 1s;
  }

  article::after {
    --bg-size: 100%;
    content: "";
    pointer-events: none;
    position: absolute;
    background: var(--gradient);
    background-attachment: fixed;
    border-radius: var(--border-radius);
    opacity: var(--active, 0);
    transition: opacity 1s;
    --alpha: 0;
    inset: 0;
    border: var(--border-width) solid transparent;
    mask: linear-gradient(#0000, #0000),
      conic-gradient(
        from
          calc(
            ((var(--start) + (var(--spread) * 0.25)) - (var(--spread) * 0.5)) *
              1deg
          ),
        #0000 0deg,
        #fff,
        #0000 calc(var(--spread) * 0.5deg)
      );
    filter: brightness(1.5);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  ,
  .badge {
    border: 2px solid var(--border);
    align-self: start;
    border-radius: 100px;
    padding: 0.5rem 0.7rem;
    font-size: 0.675rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 50;
  }

  .card-title svg {
    --count: 4;
    width: 106px;
  }

  .card-title svg:nth-of-type(2),
  .card-title svg:nth-of-type(3),
  .card-title svg:nth-of-type(4) {
    position: absolute;
    z-index: calc(var(--count) - var(--index));
    translate: calc(var(--index) * 30%) 0;
    opacity: calc(var(--count) / (2 * (var(--index) * 10)));
  }

  .card-title svg:nth-of-type(2) {
    --index: 1;
  }
  .card-title svg:nth-of-type(3) {
    --index: 2;
  }
  .card-title svg:nth-of-type(4) {
    --index: 3;
  }

  .badge svg {
    width: 16px;
  }

  .dg.ac {
    z-index: 99999 !important;
  }
`;
