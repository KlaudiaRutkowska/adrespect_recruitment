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
})
