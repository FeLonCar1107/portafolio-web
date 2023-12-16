import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 80%;
  }

  #nav-logo {
    gap: 3px;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    cursor: pointer;

    #nav-icon {
      color: var(--white-color);
      width: 20px;
      height: 20px;
    }
  }

  #nav-options {
    width: 50%;

    a {
      color: var(--opacity-white-color);
      font-family: "GeistSans-Regular";
      font-size: var(--font-size-md);
      text-decoration: none;
    }

    a:hover {
      color: var(--white-color);
      transition: 0.3s;
    }
    
    a.active {
      color: var(--white-color);
      transition: 0.3s;
    }

    ul {
      gap: 50px;
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 100%;
      list-style: none;
    }
  }

  #nav-social {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 20%;
    height: 100%;
  }

  #nav-menu {
    display: none;
  }

  .menu {
    display: none;
  }

  .github-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .linkedin-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 749px) {
    padding: 0 22px;

    #nav-menu {
      padding: 7px;
      width: 35px;
      height: 35px;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      border-radius: 50%;
      border: 1px solid var(--opacity-white-color-soft);
      cursor: pointer;

      img {
        width: 80%;
        height: 80%;
      }
    }

    .menu {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      felx-direction: column;
      background: var(--primary-color);
      z-index: 1500;
    }

    #nav-options {
      display: none;
    }

    #nav-social {
      display: none;
    }
  }

  @media (min-width: 670px) and (max-width: 1400px) {
    padding: 0 40px;
  }
`;
