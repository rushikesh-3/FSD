// importing superheroes model (3 party module)
const superheroes = require("superheroes");
console.log(superheroes.randomSuperhero());

const os = require("os");

console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temp Directory:", os.tmpdir());
console.log("Total Memory:", os.totalmem());
console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
