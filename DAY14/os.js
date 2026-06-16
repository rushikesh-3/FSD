const os = require("os");

console.log("=================================");
console.log("       NODE.JS OS MODULE");
console.log("=================================");

// Platform Information
console.log("\n======= Platform Information =======");
console.log("Platform         :", os.platform());
console.log("Type             :", os.type());
console.log("Release          :", os.release());
console.log("Version          :", os.version());
console.log("Architecture     :", os.arch());
console.log("Machine          :", os.machine());
console.log("Hostname         :", os.hostname());

// CPU Information
console.log("\n======= CPU Information =======");

const cpus = os.cpus();

console.log("CPU Cores        :", cpus.length);
console.log("CPU Model        :", cpus[0].model);
console.log("CPU Speed        :", cpus[0].speed, "MHz");

// Memory Information
console.log("\n======= Memory Information =======");
console.log("Total Memory     :", os.totalmem(), "bytes");
console.log("Free Memory      :", os.freemem(), "bytes");

console.log("Total Memory(GB):", (os.totalmem() / 1024 ** 3).toFixed(2), "GB");

console.log("Free Memory(GB) :", (os.freemem() / 1024 ** 3).toFixed(2), "GB");

// User Information
console.log("\n======= User Information =======");

const user = os.userInfo();

console.log("Username         :", user.username);
console.log("Home Directory   :", user.homedir);
console.log("UID              :", user.uid);
console.log("GID              :", user.gid);

// Directory Information
console.log("\n======= Directory Information =======");
console.log("Home Directory   :", os.homedir());
console.log("Temp Directory   :", os.tmpdir());

// Network Information
console.log("\n======= Network Information =======");

const networks = os.networkInterfaces();

for (let name in networks) {
  console.log(`\nInterface: ${name}`);

  networks[name].forEach((info) => {
    console.log("Address          :", info.address);
    console.log("Family           :", info.family);
    console.log("MAC              :", info.mac);
    console.log("Internal         :", info.internal);
    console.log("------------------------------");
  });
}

// System Uptime
console.log("\n======= System Uptime =======");

const uptime = os.uptime();

const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

console.log("Uptime (seconds) :", uptime);
console.log(`Uptime           : ${hours}h ${minutes}m ${seconds}s`);

// Parallelism Information
console.log("\n======= Parallelism =======");
console.log("Available Threads:", os.availableParallelism());

// Endianness
console.log("\n======= Endianness =======");
console.log("Endianness       :", os.endianness());

// Special Constants
console.log("\n======= Special Constants =======");
console.log("EOL Character    :", JSON.stringify(os.EOL));
console.log("Null Device      :", os.devNull);

console.log("\n=================================");
console.log("          PROGRAM END");
console.log("=================================");
