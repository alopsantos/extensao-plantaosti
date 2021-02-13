{
  const urlAPI = "https://my-json-server.typicode.com/alopsantos/plantaosti/";
  function populatePlantoes() {
    const webView = document.getElementById("webView");
    webView.innerHTML += "";
    fetch(urlAPI + "plantoes")
      .then((resultado) => {
        return resultado.json();
      })
      .then((plantoes) => {
        for (const plantao of plantoes) {
          webView.innerHTML += `
            <li  class="container-list">
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
          </li> 
            `;
        }
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

  fetch("./view/plantoes.html")
    .then((response) => {
      return response.text();
    })
    .then((plantoesView) => {
      document.querySelector("content").innerHTML = plantoesView;
      populatePlantoes();
    });

  fetch("./view/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((rodape) => {
      document.querySelector("rodape").innerHTML = rodape;
    });

    const menuPlantao = document.getElementById("menu-plantao");

    menuPlantao.addEventListener("click", function(){
        console.log("menu clik")
    })
}
