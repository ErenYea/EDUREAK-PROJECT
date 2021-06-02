const nano = require("nano");

exports.create = (req, res) => {
  nano.db.create(req.body.dbname, (err) => {
    if (err) {
      res.send("Error creating database");
      return;
    }
    res.send("Database created successfully");
  });
};
