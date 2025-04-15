const express = require("express");
const {getReceipts, postReceipts} = require("../controllers/receiptsController");

const router=express.Router();

router.route("/").get(getReceipts);
router.route("/").post(postReceipts);

module.exports=router;