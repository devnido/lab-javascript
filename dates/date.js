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
console.log('---------------------como UTC----------------------');

const dateToSubOne = new Date(2020, 1, 28, 20, 06, 10);
const dateToSubTwo = new Date(Date.now());

console.log('dateToSubOne', dateToSubOne);
console.log('dateToSubTwo', dateToSubTwo);

const dateDiff = dateToSubTwo - dateToSubOne
const dateDiffParsed = new Date(dateDiff)

console.log(dateDiff);
console.log(dateDiffParsed);

const minutes = dateDiffParsed.getMinutes();

console.log(minutes);

console.log('---------------------------------------------------');
console.log('-----------------restar dos fechas-----------------');
console.log('-------------------como timestamp------------------');

const dateToSubOneTimestamp = new Date(2020, 1, 28, 20, 46, 10).getTime();
const dateToSubTwoTimestamp = Date.now();

console.log('dateToSubOne', dateToSubOneTimestamp);
console.log('dateToSubTwo', dateToSubTwoTimestamp);

const dateDiffTimestamp = dateToSubTwoTimestamp - dateToSubOneTimestamp

console.log(dateDiffTimestamp);

const minutes2 = new Date(dateDiffTimestamp).getMinutes();
const seconds = new Date(dateDiffTimestamp).getSeconds();

console.log(minutes2);
console.log('seconds', dateDiffTimestamp / 1000);
console.log('rounded seconds', Math.round(dateDiffTimestamp / 1000));