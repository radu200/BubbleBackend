
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

module.exports = {
    db: connection
};