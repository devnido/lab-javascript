const randToken = require('rand-token')
const util = require('util')

const generateRandToken = () => {

    const token = randToken.suid(2048);

    const token2 = randToken.suid(2048);

    const token3 = randToken.suid(2048);

    const token4 = randToken.suid(2048);



    return { token, token2, token3, token4 };
}


const callGenerateRandToken = () => {


    const token = generateRandToken()

    console.log(token);


}

callGenerateRandToken()