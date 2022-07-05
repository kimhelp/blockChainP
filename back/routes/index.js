const express = require("express");
const blockRouter = require("./block/blockRouter.js");
const router = express.Router();

router.use("/api/block", blockRouter);

module.exports = router;
