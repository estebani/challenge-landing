'use strict'


import { URL_USERS, URL_POSTS, ARRAY_PICTURES } from './const.js';


const getData = function (url) {
    return fetch(url)
        .then(resp => { return resp.json() })
        .catch(e => { throw new Error(e) });
}

const getPosts = async function (users) {
    return Promise.all(users.map(user => {
        const urlApi = URL_POSTS + '/?userId=' + user.id
        return getData(urlApi)
            .then(dataPost => {
                return makeSlide(user, dataPost)
            })
            .catch(e => { throw new Error(e) });
    }));
}

const makeSlide = (user, dataPost) => ({
    'userId': user.id,
    'name': user.name,
    'post': dataPost[0],
    'userImage': ARRAY_PICTURES.pop()
})

const getRandomElments = function (InitialArray, amountElms) {
    return InitialArray.sort(() => Math.random() - Math.random()).slice(0, amountElms)
}

const createTemplate = function (slide, idx) {
    return `<div class="carousel-item ${idx == 0 ? 'active' : null}" data-bs-interval="100000000" data-bs-ride="false">
            <div class="slide_testimonial">
                <div class="carousel-caption d-none d-md-block">
                        <figure class="figure row ">
                            <img src="${slide.userImage}"
                                class="figure-img img-fluid rounded figure_card mx-auto" alt="${slide.post.title}">
                        </figure>
                        <div class="row">
                            <p class="text_grey font_big">${slide.post.body}</p>
                            <p class="my-0 text_font_bold_2 font_small mb-3">${slide.name}</p>
                        </div>

                </div>
            </div>
        </div>`;
}

export { getData, getPosts, makeSlide, getRandomElments, createTemplate };
