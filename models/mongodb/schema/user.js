const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const address = mongoose.Schema({
	houseNo: String,
	street: String,
	postecode: String,
	town: String,
});

const children = mongoose.Schema({
	age: Number,
	gender: Number,
});

const user = new Schema({
	id: String,
	firstName: String,
	lastName: String,
	email: String,
	address: address,
	children: [ children ],
});

module.exports = mongoose.model("users", user);
