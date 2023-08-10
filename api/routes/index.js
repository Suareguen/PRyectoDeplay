const router = require("express").Router();

// GET ALL

router.use("/users", require("./user.route"));

module.exports = router;
