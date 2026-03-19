function createGallery() {
  const gallery = document.querySelector('.gallery-images')
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement('img')
    image.src = `build/assets/images/thumb/${i}.webp`
    image.alt = `Show ${i}`
    image.width = 200
    image.height = 300
    image.loading = 'lazy'
    gallery.appendChild(image)

    image.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      const image = document.createElement('img')
      const header = document.querySelector('.header')
      overlay.classList.add('overlay')
      header.classList.remove('fixed')
      image.src = `source/assets/images/original/${i}.jpg`
      image.alt = `Show ${i}`
      image.width = 200
      image.height = 300
      image.loading = 'lazy'
      body.appendChild(overlay)
      overlay.appendChild(image)

      overlay.addEventListener('click', function closeImage() {
        overlay.remove()
        header.classList.add('fixed')
      })
    })
  }
}
createGallery()