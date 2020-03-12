const util = require('util')
const sleep = util.promisify(setTimeout);

const returnPromise = () => new Promise((resolve, reject) => {
    //  setTimeout(() => {
    //  si se lanza un error dentro de un setTimeout no se puede manejar

    const number = Math.round(Math.random() * 100)

    console.log('returnPromise executing...');

    if (number <= 50) {
        throw new Error('terror')
    } else {
        resolve('hello world!')
    }
    //  }, 1000);
})

const asynchronousOne = async() => {

    const result = await returnPromise()

    const newResult = result + ' addedInAsyncOne '

    return newResult;

}

const asynchronousTwo = async() => {

    const result = await asynchronousOne().catch(e => {
        throw new Error(e)
    })

    const newResult = result + ' addedInAsyncTwo'

    return newResult;
}

const asynchronousThree = async() => {

    try {
        await sleep(1000);
        const result = await asynchronousTwo()
        console.log('asynchronousThree: ' + result);

    } catch (error) {
        console.log('An error has ocurred ' + error);

    }

}

asynchronousThree()