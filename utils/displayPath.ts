import os from "os";

const network = os.networkInterfaces();
let videoPathBase: string;
if (network["Ethernet 2"]) {
	videoPathBase = `http://${network["Ethernet 2"][1].address}:8000/Video/`;
} else {
	videoPathBase = "http://localhost:8000/Video/";
}

export default videoPathBase;