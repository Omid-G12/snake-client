const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // handles incoming data and logs it for player 
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: OG');
    //conn.write('Move: up');
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;