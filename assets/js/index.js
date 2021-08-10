let time = 4000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slider-container img"),
  max = images.length;


//FUNÇÃO PARA OS ELEMENTOS I MUDAREM DE COR CONFORME AS IMAGENS PASSAM
images.forEach((iten) =>{
  console.log(iten)
  const i = document.createElement("i")
  i.classList.add("fas", "fa-circle", "buttonPaginationSlide")
  console.log(i)
  document.body.appendChild(i)
  const pagination = document.getElementById("pagination")
  pagination.appendChild(i)
})

//FUNÇÃO DO CARROSSEL DE IMAGEM
function nextImage(){
  const i = document.querySelectorAll(".buttonPaginationSlide")
  images[currentImageIndex].classList.remove("selected")
  i[currentImageIndex].classList.remove("selected")
  currentImageIndex++
  
  if (currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex].classList.add("selected")
  i[currentImageIndex].classList.add("selected")
}


function start() {
  setInterval(() =>{
    nextImage()
  }, time)
}

window.addEventListener('load', start)

