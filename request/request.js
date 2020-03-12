const request = require('request-promise-native')



async function pruebaRequest() {

    const result = await request('https://google.com');

    console.log(result);

}


pruebaRequest()