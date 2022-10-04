function toggleMenu() {
    const menuToggle = document.querySelector('.toggle')
    const sidebar = document.querySelector('.sidebar')
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

// const select = document.querySelector('select')
//
// select.addEventListener('change', changeURLLanguage)
//
// function changeURLLanguage() {
//     let lang = select.value
//     location.href = window.location.pathname + '#' + lang
//     location.reload()
// }