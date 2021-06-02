"use strict";

var nano = require("nano");

exports.create = function (req, res) {
  nano.db.create(req.body.dbname, function (err) {
    if (err) {
      res.send("Error creating database");
      return;
    }

    res.send("Database created successfully");
  });
};
//# sourceMappingURL=createdb.dev.js.map
