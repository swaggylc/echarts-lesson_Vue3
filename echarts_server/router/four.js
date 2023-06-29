const express = require("express");
const fourData = require("../mock/four.json");
const router = express.Router();

router.get("/data", (req, res) => {
  res.send({
    code: 200,
    msg: "数据请求成功",
    data: fourData,
  });
});

module.exports = router;
