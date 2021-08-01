// console.log('Olá');

// const inputEl = document.getElementById('searchInput')

// console.log(inputEl)

const logoEl = document.querySelector('.logotipo img')

// console.log(logoEl);

let time = 6000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slider-container img"),
  max = images.length;

logoEl.addEventListener('click', function(event){
  console.log(event.target.classList);
  event.target.classList.add('spinner')
  setTimeout(function(){
  event.target.classList.remove('spinner')
  },4000)
})

// inputEl.addEventListener('input', async function(eventInput){
//   console.log(eventInput.target.value)
//   const url = "https://api.github.com/users/"+eventInput.target.value
//   const user = await getUserByName(url)
//   console.log(user)
// })

// async function getUserByName(url) {
//   const response = await fetch(url);
//   const user = await response.json();
//   return user
// }

const buttonSlideNext = document.querySelector('.next')
const buttonSlidePrevious = document.querySelector('.previous')

buttonSlideNext.addEventListener('click', () =>{
  
  if (currentImageIndex === images.length - 1){
    currentImageIndex = 0
  }else{
    currentImageIndex++
  }

  images.forEach(slide =>{
    slide.classList.remove("selected")
  })

  images[currentImageIndex].classList.add("selected")

})

buttonSlidePrevious.addEventListener('click', () =>{
  if(currentImageIndex === 0){
    currentImageIndex = max -1
  }else{
    currentImageIndex--
  }

  images.forEach(slide =>{
    slide.classList.remove("selected")
  })

  images[currentImageIndex].classList.add('selected')

})


images.forEach((iten) =>{
  console.log(iten)
  const i = document.createElement("i")
  i.classList.add("fas", "fa-circle", "buttonPaginationSlide")
  console.log(i)
  document.body.appendChild(i)
  const pagination = document.getElementById("pagination")
  pagination.appendChild(i)
})

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
