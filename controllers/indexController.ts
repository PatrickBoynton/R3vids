const indexController = (req, res) => {
	res.sendFile(__dirname, "./client/build/index.html");
};

export default indexController;
