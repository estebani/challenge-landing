'use strict'


import { URL_USERS, URL_POSTS, ARRAY_PICTURES } from './const.js';
import { getData, getPosts, makeSlide, getRandomElments, createTemplate } from './utils.js';




const init = (async () => {
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
    
})();



