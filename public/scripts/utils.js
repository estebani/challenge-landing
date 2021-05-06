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

export { getData, getPosts, makeSlide, getRandomElments };
