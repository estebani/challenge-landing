'use strict'


import { ARRAY_PICTURES } from './const.js';


const makeSlide = (user, dataPost) => ({
    'userId': user.id,
    'name': user.name,
    'post': dataPost[0],
    'userImage': ARRAY_PICTURES.pop()
});

const createTemplate = function (slide, idx) {
    return `<div class="carousel-item ${idx == 0 ? 'active' : null}" data-bs-interval="10000000" >
            <div class="slide_testimonial">
                <div class="carousel-caption d-md-block">
                    <figure class="figure row ">
                        <img src="${slide.userImage}"
                            class="figure-img img-fluid rounded figure_testimonial mx-auto" alt="${slide.post.title}">
                    </figure>
                    <div class="row">
                        <p class="text_grey font_big text_grey font_big col-8 offset-2">${slide.post.body}</p>
                        <p class="my-0 fw-bold font_small mb-3 mb-3">${slide.name}</p>
                    </div>
                </div>
            </div>
        </div>`;
};


export { makeSlide, createTemplate };