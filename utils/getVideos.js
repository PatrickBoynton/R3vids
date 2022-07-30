const directoryTree = require("directory-tree");
const displayPath = require("./displayPath");

const tree = directoryTree("D:\\Extras\\");

const videos = tree.children.map((child) => {
	if (child.name.endsWith(".mp4")) return displayPath + child.name;
});

module.exports = videos;
