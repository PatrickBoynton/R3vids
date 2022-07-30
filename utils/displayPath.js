const os = require("os");

const network = os.networkInterfaces();

if (network["Ethernet 2"]) {
	const videoPathBase = `http://${network["Ethernet 2"][1].address}:8000/Video/`;
	module.exports = videoPathBase;
} else {
	const videoPathBase = "http://localhost:8000/Video/";
	module.exports = videoPathBase;
}
