'use strict'


import { URL_POSTS } from './const.js';
import { makeSlide } from './views.js';


const getData = function (url) {
    return fetch(url)
        .then(resp => { return resp.json() })
        .catch(e => { throw new Error(e) });
};

const getPosts = async function (users) {
    return Promise.all(users.map(user => {
        const urlApi = URL_POSTS + '/?userId=' + user.id
        return getData(urlApi)
            .then(dataPost => {
                return makeSlide(user, dataPost)
            })
            .catch(e => { throw new Error(e) });
    }));
};


export { getData, getPosts };
