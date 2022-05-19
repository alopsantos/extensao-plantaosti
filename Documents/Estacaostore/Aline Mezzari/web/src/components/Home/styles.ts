import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  .home__container{
    position: relative;
    row-gap: 2.5rem;
  }

  .home__img{
    width: 240px;
  }

  .home__img-bg{
    background-color${theme.colors.first_color};
    width: 285px;
    height: 430px;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-self: flex-end;
    transform: translateX(1.5rem);
  }

  .home__data {
    padding: 0 0 3rem 6rem;
  }

  .home__social {
    position: absolute;
    top: 35%;
    left: -5rem;
    transform: rotate(-90deg);
    display: flex;
    column-gap: 1rem;
    
  }

  .home__social-link{
    font-size: 1.25rem;
    color: ${theme.colors.text_color};
    transition: .3s;

    &:hover{
      color: ${theme.colors.first_color};
    }
  }

  .home__title{
    font-size: ${theme.fonts.biggest_font_size};
    font-weight: ${theme.fonts.font_bold};
    margin-bottom: ${theme.margins.mb_1};
  }

  .home__price{
    display: inline-block;
    font-size: ${theme.fonts.h1_font_size};
    font-weight: ${theme.fonts.normal_font_size};
    color: ${theme.colors.first_color};
    margin-bottom: ${theme.margins.mb_1_5};
  }

  .home__btns{
    display: flex;
    align-items: center;
  }

  .home__button{
    box-shadow: 0 12px 24px hsla(0, 0%, 10%, .2);
  }

  .button {
    display: inline-block;
    background-color: ${theme.colors.first_color};
    color: #fff;
    padding: 1.25rem 2rem;
    font-weight: ${theme.fonts.normal_font_size};
    transition: .3s;

    &:hover{
      background-color: ${theme.colors.first_color_alt};
    }
  }

  .button--gray{
    background-color: hsl(0, 0%, 75%);
    color: ${theme.colors.title_color};

    &:hover{
      background-color: hsl(0, 0%, 63%);
    }
  }

  .button--small{
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 320px) {
    .container{
      margin-left: ${theme.margins.mb_1};
      margin-right: ${theme.margins.mb_1};
    }

    .home__img-bg{
      width: 320px;
    }
    .home__title{
      font-size: ${theme.fonts.h1_font_size};
    }
    .home__button{
      font-size: ${theme.fonts.samller_font_size};
    }
  }

  @media screen and (min-width: 576px){
    .home__img-bg{
      width: 340px;
    }
  }

  @media screen and (min-width: 767px) {
    .home__container{
      padding-top: 6rem;
      grid-template-columns: 1fr max-content;
      align-items: center;
    }

    .home__img-bg{
      order: 1;
      transform: translate(1.5rem, -6rem);
    }

    .home__data{
      padding: 0 0 3rem 6rem;
    }

    .home__social {
      top:47%;
      column-gap: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .home__container {
      column-gap: 2rem;
    }

    .home__img-bg {
      width: 480px;
      height: 680px;
    }

    .home__img{
      width: 420px;
    }

    .home__social {
      left: -6rem;
    }

    .home__data{
      padding: 0 0 8rem 6rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .container{
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
