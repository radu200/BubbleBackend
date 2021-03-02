const axios = require("axios");

module.exports.getBubbleUser = async () => {
    try {
        const URL = "http://api-staging.joinbubble.co.uk/api/user";
        const AUTH_TOKEN =
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE1OTk2NDg4ODksImV4cCI6MTY0Mzg4NTY4OX0.W4P1OsLIrqzA8-XILGBBrRl1iQYLy3NZSZBZus_zfbQ";

        const res = await axios.get(URL, {
            headers: {
                "Authorization": AUTH_TOKEN
            }
        });
        return res.data;
    } catch (err) {
        return err
    }
}