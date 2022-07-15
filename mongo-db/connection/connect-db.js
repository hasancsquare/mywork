if (!global.hasOwnProperty('mongoDB')) {
    let mongoDB = {};
    var mongoose = require("mongoose");
    var connString = require("../../../appConfig").MONGO_CN_STRING;

    mongoDB.mongoose = mongoose;
    mongoDB.url = connString;
    mongoDB.Modules = require("../models/model-modules")(mongoose);

    if (!global.mongoDB) {

        mongoDB.mongoose
            .connect(mongoDB.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                console.log("Connected to the database!");
            })
            .catch(err => {
                console.log("Cannot connect to the database!", err);
                process.exit();
            });

            global.mongoDB = mongoDB;
    }
}

module.exports = global.mongoDB
