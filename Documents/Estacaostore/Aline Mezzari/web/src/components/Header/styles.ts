import styled from "styled-components";
import { theme } from "../../styles/theme";


type PropType = {
  open?: boolean | string;
};

export const Container = styled.header`
  .container {
    max-width: 1024px;
    margin-left: ${theme.margins.mb_1_5};
    margin-right: ${theme.margins.mb_1_5};
  }

  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zindexs.z_fixed};
  transition: 0.4s;

  &.scroll-header {
    background-color: ${theme.colors.body_color};
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
  }

  .nav {
    height: ${theme.sizes.header_height};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo,
  .nav__close,
  .change-theme {
    color: ${theme.colors.title_color};
  }

  .nav__logo-img {
    width: 4rem;
  }

  .nav__btns {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .nav__shop,
  .change-theme {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 320px) {
    .container {
      margin-left: ${theme.margins.mb_1};
      margin-right: ${theme.margins.mb_1};
    }
  }

  @media screen and (min-width: 767px) {
    height: calc(${theme.sizes.header_height});
    justify-content: initial;
    column-gap: 3rem;

    .nav__btns {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Navmenu = styled.div<PropType>`
  @media screen and (max-width: 767px) {
    &.nav__menu {
      position: fixed;
      background-color: ${theme.colors.body_color};
      top: 0;
      right: -100%;
      width: 100%;
      height: 100%;
      padding: 6rem 2rem 3.5rem;
      transition: 0.3s;
    }
  }

  .nav__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    list-style: none;
    align-items: normal;
    padding-left: 3rem;
  }

  .nav__link {
    color: ${theme.colors.title_color};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    font-size: ${theme.fonts.h2_font_size};
    transition: 0.3s;
    justify-content: flex-start;

    &:hover {
      color: ${theme.colors.first_color};
    }

    &.active-link {
      color: ${theme.colors.first_color};
    }
  }

  .nav__close {
    font-size: 2rem;
    position: absolute;
    top: 0.9rem;
    right: 1.25rem;
    cursor: pointer;
  }

  &.show-menu {
    right: 0;
  }

  @media screen and (min-width: 767px) {
    .nav__list {
      flex-direction: row;
      column-gap: 2.5rem;
    }

    .nav__link {
      text-transform: initial;
      font-size: ${theme.fonts.normal_font_size};
    }

    .nav__close {
      display: none;
    }
  }
`;

export const Navtoggle = styled.div`
  color: ${theme.colors.title_color};
  font-size: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
