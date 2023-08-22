import PhotoSwipeLightbox from 'photoswipe/lightbox'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

window.addEventListener("load", () => {
    let expanded = false
    const expandableGallery = document.querySelector('.expandable')
    const expandButton = document.getElementById('gallery-expand')
    const expandButtonSpan = expandButton.querySelector('span')
    const expandButtonSvg = expandButton.querySelector('svg')

    expandButton.addEventListener('click', (e) => {
        const figures = expandableGallery.querySelectorAll('.expand')

        figures.forEach(figure => {
            figure.classList.toggle('hidden')
        })

        let txt = expandButtonSpan.innerText
        expandButtonSpan.innerText = txt === 'Rozwiń' ? 'Zwiń' : 'Rozwiń';
        expandButtonSvg.classList.toggle('rotate-180')

        expandableGallery.classList.toggle('is-expanded')

        expanded && expandableGallery.scrollIntoView(false)

        expanded = !expanded
    })

    // mobile menu
    const hamburger = document.getElementById('hamburger')
    const navigation = document.getElementById('navigation')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open')
        navigation.classList.toggle('opened')
    })

    // dropdown offers menu
    let opened = false
    let timeoutId = null
    const offers = document.getElementById('offers')
    const offersMenu = document.getElementById('offers-menu')

    offers.addEventListener('click', () => {
        opened = !opened

        clearTimeout(timeoutId)

        offersMenu.classList.toggle('opened')
    })

    // search bar
    const searchButtons = document.querySelectorAll('[data-target="search"]')
    const searchField = document.getElementById('searchfield')
    const closeButton = document.getElementById('close')
    const searchBar = document.getElementById('search')

    searchButtons.forEach(button => {
        button.addEventListener('click', () => {
            searchBar.classList.add('opened')
            searchField.focus()
        })
    })

    closeButton.addEventListener('click', () => {
        searchBar.classList.remove('opened')
    })

    // gallery lightbox
    let lightbox = null
    const figures = expandableGallery.querySelectorAll('figure')

    // execute method generateLightbox on figure click
    figures.forEach((figure, index) => {
        figure.addEventListener('click', () => {
            generateLightbox(index)
        })
    })

    function generateLightbox(index = 0) {
        if (!expandableGallery.classList.contains('is-expanded'))
            return

        const items = []
        const images = document.querySelectorAll('.expandable figure:not(.hidden) img')

        images.forEach(image => {
            items.push({
                src: image.getAttribute('src'),
                width: image.clientWidth,
                height: image.clientHeight
            })
        })

        lightbox = new PhotoSwipeLightbox({
            dataSource: items,
            pswpModule: () => import('photoswipe')
        });

        lightbox.init()

        lightbox.loadAndOpen(index)
    }

    //swiper
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
})