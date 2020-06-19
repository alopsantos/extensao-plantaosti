function populatePlantao() {

  const divPlantao = document.getElementById('plantaoCard')
  const urlapi = "https://api.lopscorp.com/plantoes"
  fetch(urlapi)
    .then((res) => { return res.json() })
    .then((plantoes) => {

      for (const plantao of plantoes) {
        console.log(plantao)
        divPlantao.innerHTML = `
        <article class="plantao-card">
        <img width="332" src="${plantao.farmacia.urllogo}" alt="${plantao.farmacia.name}">
        <h2>Farmácia ${plantao.farmacia.name}</h2>
        <ul class="plantao-card-info">
          <li class="ativo">
            <span class="icon-phone"></span>Telefone: ${plantao.farmacia.phone}</li>
          <li>
            <span class="icon-location"></span>Endereço: ${plantao.farmacia.address[0]}, ${plantao.farmacia.address[1]} </li>
          <li>
            <span class="icon-location"></span>Bairro: ${plantao.farmacia.address[2]}</li>
          <li>
            <span class="icon-calendar"></span>Inicio: ${plantao.datainicio}</li>
          <li>
            <span class="icon-calendar"></span>Fim: ${plantao.datafim}</li>
        </ul>
        <div class="plantao-card-info-map">
          <a href="https://www.google.com.br/maps/@${plantao.farmacia.location.coordinates[1]},${plantao.farmacia.location.coordinates[0]}">
            <img width="332" src="assets/google_maps.jpg" alt=""/>
          </a>
        </div>
      </article>
        `
      }
    })
  document.getElementById("liPlantao").classList.add("ativo")
  document.getElementById("liPlantoes").classList.remove("ativo")
  document.getElementById("liFarmacias").classList.remove("ativo")
  document.getElementById("plantaoCard").style.display = "flex"
  document.getElementById("plantoesCard").style.display = "none"
  document.getElementById("farmaciasCard").style.display = "none"
}
populatePlantao()
function populatePlantoes() {
  const divPlantao = document.getElementById('plantoes-card')
  const urlapi = "https://api.lopscorp.com/plantoes"
  fetch(urlapi)
    .then((res) => { return res.json() })
    .then((plantoes) => {

      for (const plantao of plantoes) {
        console.log(plantao)
        divPlantao.innerHTML = `
        <article class="farmacia-card">
        <img width="100" height="100" src="${plantao.farmacia.urllogo}" alt=""/>

        <ul class="farmacias-card-info">
          <li class="ativo">
            <span class="icon-pharmacy"></span>${plantao.farmacia.name}
          </li>
          <li>
            <span class="icon-calendar"></span>Inicio: ${plantao.datainicio}</li>
          <li>
            <span class="icon-calendar"></span>Fim: ${plantao.datafim}</li>
        </ul>
        <ul class="arrow">
          <li style="border: none;">
            <a id="IdDetalhes" href="#" data-id="${plantao.farmacia._id}" alt="">
              <span class="icon-arrow">&nbsp;</span>
            </a>
          </li>
        </ul>
      </article>
        `
      }
    })
  document.getElementById("liPlantao").classList.remove("ativo")
  document.getElementById("liPlantoes").classList.add("ativo")
  document.getElementById("liFarmacias").classList.remove("ativo")
  document.getElementById("plantaoCard").style.display = "none"
  document.getElementById("plantoesCard").style.display = "flex"
  document.getElementById("farmaciasCard").style.display = "none"

}
function populateFarmacias() {
  const divPlantao = document.getElementById('farmacias-card')
  const urlapi = "https://api.lopscorp.com/farmacias"
  fetch(urlapi)
    .then((res) => { return res.json() })
    .then((farmacias) => {

      for (const farmacia of farmacias) {
        console.log(farmacia)
        divPlantao.innerHTML += `
        <article class="farmacia-card">
        <img width="100" height="100" src="assets/${farmacia.urllogo}" alt="${farmacia.name}"/>

        <ul class="farmacias-card-info">
          <li class="ativo">
            <span class="icon-pharmacy"></span>${farmacia.name}
          </li>
          <li>
            <span class="icon-phone"></span>Telefone: ${farmacia.phone}
          </li>
          <li>
            <span class="icon-location"></span>Bairro: ${farmacia.address[0]}, ${farmacia.address[1]}</li>
        </ul>
        <ul class="arrow">
          <li style="border: none;">
            <a href="#" data-id="${farmacia._id}" alt="Detalhes da farmacia ${farmacia.name}">
              <span class="icon-arrow">&nbsp;</span>
            </a>
          </li>
        </ul>
      </article>
        `
      }
    })
  document.getElementById("liPlantao").classList.remove("ativo")
  document.getElementById("liPlantoes").classList.remove("ativo")
  document.getElementById("liFarmacias").classList.add("ativo")
  document.getElementById("plantoesCard").style.display = "none"
  document.getElementById("plantaoCard").style.display = "none"
  document.getElementById("farmaciasCard").style.display = "flex"
}

const menuPlantao = document.getElementById("menu-plantao")
const menuPlantoes = document.getElementById("menu-plantoes")
const menuFarmacias = document.getElementById("menu-farmacias")

menuPlantao.addEventListener("click", function () {
  populatePlantao()
})
menuPlantoes.addEventListener("click", function () {
  populatePlantoes()

})
menuFarmacias.addEventListener("click", function () {
  populateFarmacias()
})