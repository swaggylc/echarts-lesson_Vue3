const express = require("express");
const threeData = require("../mock/three.json");
const router = express.Router();

router.get("/data", (req, res) => {
  console.log("threeData", threeData);
  res.send({
    code: 200,
    msg: "数据请求成功",
    data: threeData,
  });
});

module.exports = router;
