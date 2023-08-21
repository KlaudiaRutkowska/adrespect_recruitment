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

    const hamburger = document.getElementById('hamburger')
    const navigation = document.getElementById('navigation')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open')
        navigation.classList.toggle('opened')
    })

    let opened = false
    let timeoutId = null
    const offers = document.getElementById('offers')
    const offersMenu = document.getElementById('offers-menu')

    offers.addEventListener('click', () => {
        opened = !opened

        clearTimeout(timeoutId)

        offersMenu.classList.toggle('opened')
    })
})
