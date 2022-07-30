const directoryTree = require("directory-tree");
const displayPath = require("./displayPath");

const tree = directoryTree("D:\\Extras\\");

const videos = tree.children
	.filter((child) => child.name.endsWith(".mp4"))
	.map((child) => displayPath + child.name);

module.exports = videos;
