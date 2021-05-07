'use strict'


const createTemplate = function (slide, idx) {
    return `<div class="carousel-item ${idx == 0 ? 'active' : null}" data-bs-interval="4000" >
            <div class="slide_testimonial">
                <div class="carousel-caption d-md-block">
                    <figure class="figure row ">
                        <img src="${slide.userImage}"
                            class="figure-img img-fluid rounded figure_testimonial mx-auto" alt="${slide.post.title}">
                    </figure>
                    <div class="row">
                        <q class="text_grey font_big text_grey font_big col-8 offset-2 fst-italic mb-4">${slide.post.body}</q>
                        <p class="fw-bold font_small mb-5">${slide.name}</p>
                    </div>
                </div>
            </div>
        </div>`;
};


export { createTemplate };