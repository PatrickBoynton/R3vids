import directoryTree from "directory-tree";
import displayPath from "./displayPath";

const tree = directoryTree("F:\\Extras\\");

const videos = tree.children
	.filter((child) => child.name.endsWith(".mp4"))
	.map((child) => displayPath + child.name);

export default videos;
