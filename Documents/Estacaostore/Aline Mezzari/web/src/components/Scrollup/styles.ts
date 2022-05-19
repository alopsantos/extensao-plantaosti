import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.a`
  &.scrollup {
    position: fixed;
    right: 1rem;
    bottom: -30%;
    background-color: ${theme.colors.body_color};
    box-shadow: 0 4px 12px hsla(0, 0%, 20%, 0.1);
    display: inline-flex;
    padding: 0.25rem;
    z-index: ${theme.zindexs.z_tooltip};
    opacity: 0.8;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .scroll__icon {
    font-size: 2.5rem;
    color: ${theme.colors.first_color};
  }

  &.show-scroll {
    bottom: 3rem;
  }
`;
