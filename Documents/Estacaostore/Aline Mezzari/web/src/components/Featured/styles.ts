import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  .featured__container {
    row-gap: 2.5rem;
  }

  .featured__card {
    position: relative;
    text-align: center;
    background-color: ${theme.colors.text_color_ligth};
    padding-top: 2rem;
    border: 1px solid ${theme.colors.body_color};
    overflow-y: hidden;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 12px 32px hsla(0, 0%, 20%, 0.1);
      padding: 2rem 0 1rem 0;
    }

    &:hover .featured__button {
      transform: translateY(0);
      opacity: 1;
    }

    &:hover .featured__price {
      margin-bottom: ${theme.margins.mb_1_5};
    }
  }

  .featured__tag {
    background-color: ${theme.colors.first_color};
    padding: 0.5rem 1rem;
    color: #fff;
    text-transform: uppercase;
    font-size: ${theme.fonts.small_font_size};
    font-weight: ${theme.fonts.normal_font_size};
    position: absolute;
    transform: rotate(-90deg);
    left: -1rem;
    top: 3rem;
  }

  .featured__img {
    height: 214px;
    margin-bottom: ${theme.margins.mb_1};
  }

  .featured__title,
  .featured__price {
    font-size: ${theme.fonts.h3_font_size};
    font-weight: ${theme.fonts.font_bold};
  }

  .feature__title {
    text-transform: uppercase;
    margin-bottom: ${theme.margins.mb_0_75};
  }

  .featured__price {
    display: block;
    color: ${theme.colors.first_color};
    transition: 0.3s;
  }

  .featured__button {
    font-size: ${theme.fonts.small_font_size};
    transform: translateY(.75rem);
    opacity: 0;
  }

  @media screen and (max-width: 320px) {
    &.container {
      margin-left: ${theme.margins.mb_1};
      margin-right: ${theme.margins.mb_1};
    }
  }

  @media screen and (min-width: 576px) {
    .featured__container {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media screen and (min-width: 767px) {
    &.section{
      padding: 8rem 0 1rem;
    }

    .featured__title,
    .featured__price {
      font-size: ${theme.fonts.normal_font_size};
    }
  }

  @media screen and (min-width: 992px) {
    .section__title{
      font-size: ${theme.fonts.h2_font_size};
    }

    .featured__container{
      grid-template-columns: repeat(3, 312px);
      padding-top: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    &.container{
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
