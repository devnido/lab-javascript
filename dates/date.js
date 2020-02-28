console.log('---------------------------------------------------');
console.log('-----------------Fechas Timestamp------------------');
console.log('---------------------------------------------------');
const dateOne = Date.now();
const dateTwo = Date.now();
console.log('dateOne', dateOne);
console.log('dateTwo', dateTwo);

console.log('---------------------------------------------------');
console.log('-----------------Fechas UTC------------------------');
console.log('---------------------------------------------------');
const dateOneParsed = new Date(dateOne);
const dateTwoParsed = new Date(dateOne);

console.log('dateOneParsed', dateOneParsed);
console.log('dateTwoParsed', dateTwoParsed);

console.log('---------------------------------------------------');
console.log('-----------------Fechas Locales--------------------');
console.log('---------------------------------------------------');
const dateOneParsedToLocale = dateOneParsed.toLocaleString();
const dateTwoParsedToLocale = dateTwoParsed.toLocaleString();

console.log('dateOneParsedToLocale', dateOneParsedToLocale);
console.log('dateTwoParsedToLocale', dateTwoParsedToLocale);

// restar dos fechas
console.log('---------------------------------------------------');
console.log('-----------------restar dos fechas-----------------');
console.log('---------------------------------------------------');

const dateToSubOne = new Date(2020, 1, 28, 20, 06, 10);
const dateToSubTwo = new Date(Date.now());

console.log('dateToSubOne', dateToSubOne);
console.log('dateToSubTwo', dateToSubTwo);

const dateDiffTimestamp = dateToSubTwo - dateToSubOne
const dateDiffParsed = new Date(dateDiffTimestamp)

console.log(dateDiffTimestamp);
console.log(dateDiffParsed);

const minutes = dateDiffParsed.getMinutes();

console.log(minutes);