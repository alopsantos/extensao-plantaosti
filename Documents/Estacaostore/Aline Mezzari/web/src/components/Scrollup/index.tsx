import React, { useEffect, useState } from "react";
import { Container } from "./styles";

const Scrollup: React.FC = () => {
  const [scrollUp, setScrollup] = useState(false);

  const changeScrollUp = () => {
    window.scrollY >= 200 ? setScrollup(true) : setScrollup(false);
  };
  // const changeScrollUp = () => {
  //   if (window.screenY >= 200) {
  //     setScrollup(true);
  //   } else {
  //     setScrollup(false);
  //   }
  // };
  useEffect(() => {
    window.addEventListener("scroll", changeScrollUp);
  }, []);
  return (
    <Container
      className={scrollUp ? "scrollup show-scroll" : "scrollup"}
      id="scroll-up"
      href="#"
    >
      <i className="ri-arrow-up-line"></i>
    </Container>
  );
};

export { Scrollup };

