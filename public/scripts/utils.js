'use strict'


const getRandomElments = function (InitialArray, amountElms) {
    return InitialArray.sort(() => Math.random() - Math.random()).slice(0, amountElms)
};


export { getRandomElments };
