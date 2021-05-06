'use strict'


import { URL_USERS, URL_POSTS, ARRAY_PICTURES } from './const.js';
import { getData, getPosts, makeSlide, getRandomElments } from './utils.js';

const createTemplate = function(slide){
    return `
        <div class="carousel-item active">
        <img src="${slide.userImage}" class="d-block w-100" alt="${slide.post.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>`;
}

const init = (async () => {
    try {
        const users = await getData(URL_USERS);
        const usersRandom = getRandomElments(users, 4);
        const slides = await getPosts(usersRandom);
        slides.map(createTemplate)
    } catch (error) {
        console.error(error);
    }
    
})();



