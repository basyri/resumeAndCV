const toggleMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('slide')
        })
    }
}

toggleMenu('nav-toggle', 'nav-menu');