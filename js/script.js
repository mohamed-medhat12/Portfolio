let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', function () {
    sections.forEach(sec => {
        let top = window.pageYOffset;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbxHqfKVgFD0NKgVNaCCj417zTyvParSrN0fbQ9zq856iriG-zYH6OLrRirVqkgEbjVZ/exec'
const form = document.forms['submit-to-google-sheet']
const sucssues = document.getElementById('sucssues');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            sucssues.innerHTML = "Send successfully";

            setTimeout(function () {
                sucssues.innerHTML = "";

            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

