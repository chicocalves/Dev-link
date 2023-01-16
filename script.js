function toogleMode() {
  const html = document.documentElement
  // inclui e remove a class light automáticamente
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // Alerar a foto
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro e com um fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e com um fundo azul"
    )
  }
}
