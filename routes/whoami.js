var express = require("express");
var router = express.Router();
require("dotenv").config();

const TRUST_PROXY =
  process.env.TRUST_PROXY === true || process.env.TRUST_PROXY === "true";

router.get("/", function (req, res, next) {
  const clientIp = req.ip;
  const reportedIp = TRUST_PROXY ? req.headers["x-forwarded-for"] : null;
  const method = req.method;
  const receivedAt = new Date().toISOString();
  const trustDecision = TRUST_PROXY
    ? "Trusting proxy: using X-Forwarded-For via Express trust proxy"
    : "Not trusting proxy: using socket remote address only";

  console.log("Parsed TRUST_PROXY:", TRUST_PROXY);
  res.json({
    clientIp,
    reportedIp,
    method,
    receivedAt,
    trustDecision,
  });
});

module.exports = router;
