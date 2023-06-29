const express = require("express");
const twoData = require("../mock/two.json");

const router = express.Router();

router.get("/data", (req, res) => {
  res.send({
    code: 200,
    msg: "数据请求成功",
    data: twoData,
  });
});

module.exports = router;
