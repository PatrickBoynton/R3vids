import videos from "../utils/getVideos";
import Video from "../models/video";

const createVideoListController = (req, res) => {
	videos.forEach((video) => Video.create({ path: video, hasPlayed: false }));

	res.status(201).send({ message: "Videos added." });

	if (videos.length === 0) {
		res.send({ message: "No videos to add." });
	}
};

export default createVideoListController;
