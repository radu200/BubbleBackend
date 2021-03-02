const cron = require("node-cron");
const { processUserData } = require("./user");

// # ┌────────────── second (optional)0-59
//  # │ ┌──────────── minute 0-59
//  # │ │ ┌────────── hour 0-23
//  # │ │ │ ┌──────── day of month 1-31
//  # │ │ │ │ ┌────── month 1-12
//  # │ │ │ │ │ ┌──── day of week 0-7 (or names, 0 or 7 are sunday)
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *

//task every 30 minutes
cron.schedule("*/30 *  * * *", async () => {
	processUserData();
});
