const os = require('os');

console.log(os.type()); //Windows_NT
console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.hostname()); //LAPTOP-30FF27IA
console.log(os.cpus().length); //16
//console.log(os.cpus());
console.log(os.totalmem());//16849948672
 const totalRam = os.totalmem()
 console.log(totalRam);15.692737579345703
let freemem = os.freemem() 
console.log(freemem); //3.1237869262695312
console.log(os.userInfo());
/*
[Object: null prototype] {
  uid: -1,
  gid: -1,
  username: 'suhan',
  homedir: 'C:\\Users\\suhan',
  shell: null
}
*/
