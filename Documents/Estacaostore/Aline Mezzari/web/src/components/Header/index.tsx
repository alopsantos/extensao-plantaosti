import React, { useEffect, useState } from "react";
import { Container, Navmenu, Navtoggle } from "./styles";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeScrollHeader = () => {
    if (window.screenY >= 200) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollHeader);
  }, []);

  return (
    <Container
      className={scrollHeader ? "header scroll-header" : "header"}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img
            src="https://estacaodamodastore.vteximg.com.br/arquivos/logoalinemezzaribrand.svg"
            className="nav__logo-img"
            width="80"
            alt=""
          />
        </a>

        <Navmenu
          className={open ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
          open={open}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link active">
                Novidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Coleções
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Sale
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contato
              </a>
            </li>
          </ul>

          <i
            className="ri-close-line nav__close"
            id="nav-close"
            onClick={() => setOpen(!open)}
          ></i>
        </Navmenu>

        <div className="nav__btns">
          <i className="ri-moon-line change-theme" id="theme-button"></i>

          <div className="nav__shop" id="cart-shop">
            <i className="ri-shopping-bag-line"></i>
          </div>

          <Navtoggle
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setOpen(!open)}
          >
            <i className="ri-function-line"></i>
          </Navtoggle>
        </div>
      </nav>
    </Container>
  );
};

export { Header };

