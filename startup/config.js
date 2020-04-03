const config = require("config");

module.exports = function () {
    if (!config.get("jwtPrivateKey")) {
        console.error("Fatal Error: Jwt Private Key is not defined.");
        throw new Error("Fatal Error: Jwt Private Key is not defined.");
    }
}