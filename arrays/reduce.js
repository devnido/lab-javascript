const devices = ['a', 'g', 't', 'p', 'h'];



const devicesList = devices.reduce((acc, value) => acc.concat({ device: value }), [])

console.log('antes', devices);
console.log('despues', devicesList);