const Video = require("../models/video");
const { Sequelize } = require("sequelize");

const randomVideoController = async (req, res) => {
	const randVid = await Video.findAll({
		order: Sequelize.literal("rand()"),
		limit: 1,
		benchmark: true,
		logging: console.log,
	});
	res.send(randVid[0].path);

	Video.update({ hasPlayed: true }, { where: { path: randVid[0].path } });
};

module.exports = randomVideoController;
