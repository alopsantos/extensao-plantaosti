{
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  const urlAPI = "https://my-json-server.typicode.com/alopsantos/plantaosti/";
  const urlSource = "http://app.lopscorp.com";

  function popularPlantao() {
    const plantaoId = "42";
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + `plantoes/40`, options)
      .then((resultado) => {
        return resultado.json();
      })
      .then((plantao) => {
        webView.innerHTML += `
            <article class="item">
              <img class="farmaciaItem" src="${urlSource}/${plantao["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${plantao.name}</h3>
                <p>
                <span>  
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                  ${plantao.street}<span><br />
                  <span>${plantao.neighborhood}</span><br />
                  <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                  ${plantao.phone}</span><br />
          
                  </p>
                  <h4>Plantão</h4>
                  <div class="bloco">
                      <span>Inicio ${plantao.datetimestart}</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"></path></svg>
                      <span>Fim ${plantao.datetimeend}</span>

                      </div>
                      <a href="">Veja no mapa</a>
              </div>
            </article>
            `;
      });
  }
  function populatePlantoes() {
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + "plantoes", options)
      .then((resultado) => {
        return resultado.json();
      })
      .then((plantoes) => {
        for (const plantao of plantoes) {
          webView.innerHTML += `
            <li  class="container-list">
            <a href="#" onclick="carregarDetalhesPlantao(${plantao.id})">
            <article class="itens">
              <img class="farmaciaItens" src="${urlSource}/${plantao["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${plantao.name}</h3>
                <p>
                  ${plantao.street}<br />
                  ${plantao.neighborhood}<br />
          
                  Inicio: ${plantao.datetimestart} | Fim: ${plantao.datetimeend}
                </p>
              </div>
            </article>
            </a>
          </li> 
            `;
        }
      });
  }
  function popularDetalhesPlantao(id) {
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + `plantoes/${id}`, options)
      .then((resultado) => {
        return resultado.json();
      })
      .then((plantao) => {
        webView.innerHTML += `
          <li>
          <article class="item">
          <img class="farmaciaItem" src="${urlSource}/${plantao["urllogo"]}" alt="" srcset="">
          <div class="detalhes">
            <h3>${plantao.name}</h3>
            <p>
            <span>  
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
              ${plantao.street}<span><br />
              <span>${plantao.neighborhood}</span><br />
              <span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
              ${plantao.phone}</span><br />
      
              </p>
              <h4>Plantão</h4>
              <div class="bloco">
                  <span>Inicio ${plantao.datetimestart}</span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"></path></svg>
                  <span>Fim ${plantao.datetimeend}</span>
  
                  </div>
                  </div>
                  <a href="">Veja no mapa</a>
        </article>
        </li>
            `;
      });
  }

  function popularFarmacias() {
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + "farmacias", options)
      .then((resultado) => {
        return resultado.json();
      })
      .then((farmacias) => {
        for (const farmacia of farmacias) {
          webView.innerHTML += `
          <li  class="container-list">
          <a href="#" onclick="carregarDetalhesFarmacia(${farmacia.id})">
            <article class="itens">
              <img class="farmaciaItens" src="${urlSource}/${farmacia["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${farmacia.name}</h3>
                <p>
                  ${farmacia.street}<br />
                  ${farmacia.neighborhood}<br />
                  ${farmacia.phone}<br />
                </p>
              </div>
            </article>
            </a>
          </li> 
            `;
        }
      });
  }
  function popularDetalhesFarmacia(id) {
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + `farmacias/${id}`, options)
      .then((resultado) => {
        return resultado.json();
      })
      .then((farmacia) => {
        webView.innerHTML += `
          <article class="item farmacia">
              <img class="farmaciaItem" src="${urlSource}/${farmacia["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${farmacia.name}</h3>
                <p>
                <span>  
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                  ${farmacia.street}<span><br />
                  <span>${farmacia.neighborhood}</span><br />
                  <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                  ${farmacia.phone}</span><br />
          
                  </p>
                      <a href="">Veja no mapa</a>
              </div>
            </article>
            `;
      });
  }

  fetch("./view/menu.html")
    .then((response) => {
      return response.text();
    })
    .then((menu) => {
      document.querySelector("menu").innerHTML = menu;
    });

  fetch("./view/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((rodape) => {
      document.querySelector("rodape").innerHTML = rodape;
    });

  function carregarPlantao() {
    fetch("./view/plantao.html")
      .then((response) => {
        return response.text();
      })
      .then((plantaoView) => {
        document.querySelector("content").innerHTML = plantaoView;
        popularPlantao();
      });
  }

  function carregarPlantoes() {
    fetch("./view/plantoes.html")
      .then((response) => {
        return response.text();
      })
      .then((plantoesView) => {
        document.querySelector("content").innerHTML = plantoesView;
        populatePlantoes();
      });
  }

  function carregarDetalhesPlantao(id) {
    fetch("./view/detalhesPlantao.html")
      .then((response) => {
        return response.text();
      })
      .then((plantaoView) => {
        document.querySelector("content").innerHTML = plantaoView;
        popularDetalhesPlantao(id);
      });
  }


  function carregarFarmacias() {
    fetch("./view/farmacias.html")
      .then((response) => {
        return response.text();
      })
      .then((farmaciasView) => {
        document.querySelector("content").innerHTML = farmaciasView;
        popularFarmacias();
      });
  }

  function carregarDetalhesFarmacia(id) {
    fetch("./view/detalhesFarmacia.html")
      .then((response) => {
        return response.text();
      })
      .then((farmaciaView) => {
        document.querySelector("content").innerHTML = farmaciaView;
        popularDetalhesFarmacia(id);
      });
  }
}
