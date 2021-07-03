const toggle = document.getElementById('toggle');
const nav = document.getElementsByTagName('ul')[0];
        toggle.addEventListener('click',() => {
            toggle.classList.toggle('active')
            nav.classList.toggle('active');
        })
     