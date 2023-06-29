const express = require("express");
const oneData = require("../mock/one.json");

const router = express.Router();

router.get("/data", (req, res) => {
  res.send({
    code: 200,
    mse: "数据请求成功",
    data: oneData,
  });
});

module.exports = router;
