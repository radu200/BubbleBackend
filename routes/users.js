module.exports = (app) => {
	const userController = require("../controllers/users");
	const middleware = require("../middleware");

	app.get("/api/user", userController.getUser);

	app.get("/api/user/all", userController.getAllUsers);
	app.post("/api/user/delete", middleware.checkUserId, userController.deleteUser);
};
