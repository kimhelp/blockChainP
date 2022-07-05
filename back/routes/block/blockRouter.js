const express = require("express");
const router = express.Router();
const blockController = require("./blockController.js");

router.post("/newBlock", blockController.newBlock);
router.post("/blockList", blockController.blockList);
router.post("/search", blockController.search);
router.post("/searchList", blockController.searchList);
module.exports = router;
