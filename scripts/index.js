var lastScrollTop = 0
header = document.getElementById('header')

window.addEventListener('scroll', () => {
    let scrollTop = this.window.scrollY || this.document.documentElement.scrollTop

    if (scrollTop > lastScrollTop)
    {
        header.style.top = '-100px'
    }
    else
    {
        header.style.top = '0px'
    }

    lastScrollTop = scrollTop
})
