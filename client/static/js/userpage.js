const navBtn = document.getElementById('show-nav-btn')
const navBar = document.getElementById('hidden-userpage-nav')

navBtn.addEventListener('click', () => {
    switch(navBtn.id) {
    case 'show-nav-btn':
        navBtn.innerHTML = '&times;';
        navBtn.id = 'hide-nav-btn';
        navBar.id = 'show-userpage-nav';
        break;
    case 'hide-nav-btn':
        navBtn.innerHTML = '&#9776';
        navBtn.id = 'show-nav-btn';
        navBar.id = 'hidden-userpage-nav';
        break;
    }
})