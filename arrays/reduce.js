const devices = ['a', 'g', 't', 'p', 'h'];

const devicesObj = [{ name: 'a' }, { name: 'g' }, { name: 't' }, { name: 'p' }, { name: 'h' }];



const devicesList = devices.reduce((acc, value) => acc.concat({ device: value }), [])

console.log('antes', devices);
console.log('despues', devicesList);


const devicesList2 = devicesObj.reduce((arr, device) => ({...arr, [device.name]: device }), {})

console.log(devicesList2);