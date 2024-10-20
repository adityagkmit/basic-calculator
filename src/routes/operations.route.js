const express = require("express");
const {
  performOperation,
  getHistory,
  clearHistory,
  resetHistory,
} = require("../controllers/operations.controller.js");

const router = express.Router();

router.post("/operations", performOperation);
router.get("/operations", getHistory);
router.delete("/operation", resetHistory);
router.delete("/operations/:id", clearHistory);
// router.delete('/operations', resetHistory);

module.exports = router;
