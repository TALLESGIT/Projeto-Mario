let form = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


function cliqueiNoBotao() {
  form.style.left = "550px"
  mascara.style.visibility = "visible"
}

function sumirForm() {
  form.style.left = "-340px"
  mascara.style.visibility = "hidden"
}

