const io = require("../socket.io/socket.io")();

// once client connect send some data
io.on("connection", client => {
  client.emit("init", {data: "hello world"});
});

io.listen(3000);

