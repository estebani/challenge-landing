'use strict'


import { ARRAY_PICTURES } from './const.js';


class Util {
    constructor() {
        this.pictures = ARRAY_PICTURES;
    }
    getRandomElments = (InitialArray, amountElms) => {
        return InitialArray.sort(() => Math.random() - Math.random()).slice(0, amountElms)
    };
    
    makeSlide = ([user,post]) => {
        return {
            'userId': user.id,
            'name': user.name,
            'post': post[0],
            'userImage': ARRAY_PICTURES.pop()
    }};
}


export { Util };
