import React from "react";
import { Container } from "./styles";


const Featured: React.FC = () => {
  return (
    <Container className="featured section container" id="featured">
      <h2 className="section__title">Featured</h2>

      <div className="featured__container grid">
        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src="/images/featured1.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Vestido Thauany</h3>
            <span className="featured__price">R$ 1050,00</span>
          </div>

          <button className="button featured__button">DETALHES</button>
        </article>

        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src="/images/featured1.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Vestido Thauany</h3>
            <span className="featured__price">R$ 1050,00</span>
          </div>

          <button className="button featured__button">DETALHES</button>
        </article>

        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src="/images/featured1.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Vestido Thauany</h3>
            <span className="featured__price">R$ 1050,00</span>
          </div>

          <button className="button featured__button">DETALHES</button>
        </article>
        
        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src="/images/featured1.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Vestido Thauany</h3>
            <span className="featured__price">R$ 1050,00</span>
          </div>

          <button className="button featured__button">DETALHES</button>
        </article>
      </div>
    </Container>
  );
};

export { Featured };

