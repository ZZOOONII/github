const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본주소: localhost:PORT
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.deleteVisitor);
// router.get('/visitor', controller.getVisitor);
router.get("/visitor/:id", controller.getVisitor);
router.patch("/visitor", controller.updateVisitor);

module.exports = router;
