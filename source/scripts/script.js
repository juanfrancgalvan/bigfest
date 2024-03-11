document.addEventListener('DOMContentLoaded', function () {
  start()
})

function start() {
  headerFixed()
  smoothScroll()
  createGallery()
}

function headerFixed() {
  const body = document.querySelector('body')
  const header = document.querySelector('.header')
  const festival = document.querySelector('.festival')

  window.addEventListener('scroll', function () {
    if (festival.getBoundingClientRect().bottom < 0) {
      header.classList.add('fixed')
      body.classList.add('body-scroll')
    }
    else {
      header.classList.remove('fixed')
      body.classList.remove('body-scroll')
    }
  })
}

function smoothScroll() {
  const links = document.querySelectorAll('.nav a')
  links.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault()
      const scrollSection = e.target.attributes.href.value
      const section = document.querySelector(scrollSection)
      section.scrollIntoView({ behavior: 'smooth' })
    })
  })
}

function createGallery() {
  const gallery = document.querySelector('.gallery-images')
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement('img')
    image.src = `build/assets/images/thumb/${i}.webp`
    image.alt = `Gallery ${i}`
    image.width = 200
    image.height = 300
    image.loading = 'lazy'
    gallery.appendChild(image)

    image.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      const image = document.createElement('img')
      image.src = `source/assets/images/original/${i}.jpg`
      image.alt = `Gallery ${i}`
      image.width = 200
      image.height = 300
      image.loading = 'lazy'
      body.appendChild(overlay)
      overlay.appendChild(image)

      overlay.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  }
}

// function showImage(id) {
//   const image = document.createElement('li')
//   image.innerHTML = `<img loading="lazy" width="200" height="300" src="build/assets/images/original/${id}.webp" alt="Gallery image">`
//   const overlay = document.createElement('div')
//   overlay.classList.add('overlay')
//   overlay.appendChild(image)
  
//   // overlay.onclick = function () {
//     //   const body = document.querySelector('body')
//     //   body.classList.remove('fix')
//     //   overlay.remove()
//     // }
    
//     const body = document.querySelector('body')
//     body.appendChild(overlay)
//   // body.classList.add('fix')

//   image.addEventListener('click', function closeImage() {
//     overlay.remove()
//   })

//   // const closeImage = document.createElement('p')
//   // closeImage.textContent = 'X'
//   // closeImage.classList.add('close-button')
//   // closeImage.onclick = function () {
//   //   const body = document.querySelector('body')
//   //   body.classList.remove('fix')
//   //   overlay.remove()
//   // }
//   // overlay.appendChild(closeImage)
// }
