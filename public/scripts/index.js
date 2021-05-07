'use strict'


import { Util } from './utils.js';
import { getPosts, getUsers } from './webservices.js';
import { createTemplate } from './views.js';

const buildTestimonials = async function(){
    try {
        const util = new Util();
        const users = await getUsers();
        const usersRandom = util.getRandomElments(users, 4);
        const posts = await getPosts(usersRandom);
        const slides = posts.map(util.makeSlide);
        const templates = slides.map(createTemplate);
        const testimonials_contain = document.getElementById('testimonials_contain');
        testimonials_contain.innerHTML = templates.join(' ');
    } catch (error) {
        console.error(error);
    }
}

const checkFormContact = function(){
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
}

const init = (() => {
    buildTestimonials();
    checkFormContact();
})();



