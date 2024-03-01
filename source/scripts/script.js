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
    const image = document.createElement('li')
    image.innerHTML = `<img loading="lazy" width="200" height="300" src="build/assets/images/thumb/${i}.webp" alt="Gallery image">`
    image.onclick = function () {
      showImage(i)
    }
    gallery.appendChild(image)
  }
}

function showImage(id) {
  const image = document.createElement('li')
  image.innerHTML = `<img loading="lazy" width="200" height="300" src="build/assets/images/original/${id}.webp" alt="Gallery image">`
  const overlay = document.createElement('div')
  overlay.appendChild(image)
  overlay.classList.add('overlay')
  overlay.onclick = function () {
    const body = document.querySelector('body')
    body.classList.remove('fix')
    overlay.remove()
  }

  const body = document.querySelector('body')
  body.appendChild(overlay)
  body.classList.add('fix')

  const closeImage = document.createElement('p')
  closeImage.textContent = 'X'
  closeImage.classList.add('close-button')
  closeImage.onclick = function () {
    const body = document.querySelector('body')
    body.classList.remove('fix')
    overlay.remove()
  }
  overlay.appendChild(closeImage)
}
