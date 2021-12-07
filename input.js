let connection;
let setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  let handleUserInput = function (key) {
    // console.log(key);
    // your code here
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'd') {
      conn.write('Move: right');
    } else if (key === 'z') {
      // console.log('Type Key');
      conn.write('Say: Hello');
    }
  };

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
