const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const { host, port } = require('./constants');
  // console.log(IP);
  // console.log(PORT);
  // const ipNum = IP();
  // const postData = PORT();
  const conn = net.createConnection({
    host: host, // IP address here,
    port: port, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    // conn.write('Name: K9R');
    let arr = ['Name: K9R'];
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        conn.write(arr[i]);
      }, i * 100); // <= 1s delay to make it noticeable. Can dial it down later.
    }
  });
  return conn;
};

console.log('Connecting ...');

module.exports = {
  connect,
};
// コールバック関数とは
// function a(b) {
//     b();
// }
// function b() {
// }
