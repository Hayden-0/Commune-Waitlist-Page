const btn = document.getElementById('hamburger-icon');
const links_container = document.querySelector('.links-container')

btn.addEventListener('click', () => {
    links_container.classList.toggle('links-container-toggle');
})