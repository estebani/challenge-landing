'use strict'


import { URL_POSTS, URL_USERS } from './const.js';


const getData = function (url) {
    return fetch(url)
        .then(resp => { return resp.json() })
        .catch(e => { throw new Error(e) });
};


const getUsers = function () {
    return fetch(URL_USERS)
        .then(resp => { return resp.json() })
        .catch(e => { throw new Error(e) });
};


const getPosts = async function (users) {
    return Promise.all(users.map(user => {
        const urlApi = URL_POSTS + '/?userId=' + user.id
        return getData(urlApi)
            .then(dataPost => {
                return [user, dataPost];
            })
            .catch(e => { throw new Error(e) });
    }));
};


export { getData, getPosts, getUsers };
