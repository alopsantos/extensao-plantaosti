{
  const urlAPI = "https://my-json-server.typicode.com/alopsantos/plantaosti/";
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
              <img src="http://app.lopscorp.com/${plantao["urllogo"]}" alt="" srcset="">
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
          <section>
            <article class="item">
              <img src="http://app.lopscorp.com/${plantao["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${plantao.name}</h3>
                <p>
                  ${plantao.street}<br />
                  ${plantao.neighborhood}<br />
                  ${plantao.phone}<br />
          
                  </p>
                  <div class="bloco">
                  <span>Plantão</span>
                    Inicio: ${plantao.datetimestart} | Fim: ${plantao.datetimeend}
                    <a href="">Veja no mapa</a>
                  </div>
              </div>
            </article>
          </section>
            `;
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
          <li  class="container-list">
          
            <article class="itens">
              <img src="http://app.lopscorp.com/${plantao["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${plantao.name}</h3>
                <p>
                  ${plantao.street}<br />
                  ${plantao.neighborhood}<br />
                </p>
              </div>
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
              <img src="http://app.lopscorp.com/${farmacia["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${farmacia.name}</h3>
                <p>
                  ${farmacia.street}<br />
                  ${farmacia.neighborhood}<br />
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
          <li  class="container-list">
          <a href="#" onclick="carregarDetalhesFarmacia(${farmacia.id})">
            <article class="itens">
              <img src="http://app.lopscorp.com/${farmacia["urllogo"]}" alt="" srcset="">
              <div class="detalhes">
                <h3>${farmacia.name}</h3>
                <p>
                  ${farmacia.street}<br />
                  ${farmacia.neighborhood}<br />
                </p>
              </div>
            </article>
            </a>
          </li> 
            `;
      });
  }
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

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
