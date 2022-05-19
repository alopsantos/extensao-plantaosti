import React from "react";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container className="home" id="home">
      <div className="home__container container grid">
        <div className="home__img-bg">
          <img
            src="/images/home.jpg"
            alt=""
            className="home__img"
          />
        </div>

        <div className="home__social">
          <a href="#" className="home__social-link">
            <i className="ri-whatsapp-line"></i>
          </a>
          <a href="#" className="home__social-link">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="#" className="home__social-link">
            <i className="ri-instagram-line"></i>
          </a>
        </div>

        <div className="home__data">
          <h1 className="home__title">
            Dressed to Impress
            <br /> New Collection
          </h1>
          <p className="home__description">
            O gosto por se vestir para si e ser sua melhor inspiração diária é o
            guia motivacional de toda mulher. E nesta sequência de lançamento
            Aline Mezzari Brand, voce recebe o melhor da estação para compor
            cada look com sucesso: peças coloridas, couro e casacos da melhor
            qualidade.
          </p>

          <span className="home__price">16/05/2022</span>

          <div className="home__btns">
            <a href="#" className="button button--gray button--small">
              Atacado
            </a>

            <button className="button home__button">Varejo</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Home };

