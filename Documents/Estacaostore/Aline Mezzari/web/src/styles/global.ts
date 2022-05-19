import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    font-family: ${theme.fonts.body_font};
    font-size: ${theme.fonts.normal_font_size};
    background-color: ${theme.colors.body_color};
    color: ${theme.colors.text_color};
  }
  h1, h2, h3{
    color: ${theme.colors.title_color};
    font-weight: ${theme.fonts.font_bold};
  }
  a {
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  button{
    border: none;
    outline: none;
    cursor: pointer;
  }
  .container {
    max-width: 1024px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  .section{
    padding: 4.5rem 0 2rem;
  }
  .section__title{
    position: relative;
    font-size: ${theme.fonts.h1_font_size};
    padding-left: 1.25rem;
    margin-bottom: 2.25rem;
  }
  .section__title::before{
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 3px;
    height: 20px;
    background-color: ${theme.colors.first_color};
  }
  .button{
    display: inline-block;
    background-color: ${theme.colors.first_color};
    color: #fff;
    padding: 1.25rem 2rem;
    transition: .3s;
    &:hover{
      background-color: ${theme.colors.first_color_alt}
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
  ::-webkit-scrollbar {
    width: .6rem;
    background: hsl(0, 0%, 74%);
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 17%)
  }
`;
