'use strict'


import { URL_USERS } from './const.js';
import { getRandomElments } from './utils.js';
import { getData, getPosts } from './webservices.js';
import { createTemplate } from './views.js';

const buildTestimonials = async function(){
    try {
        const users = await getData(URL_USERS);
        const usersRandom = getRandomElments(users, 4);
        const slides = await getPosts(usersRandom);
        const templates = slides.map(createTemplate)
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



