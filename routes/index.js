const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const webpageRoutes = require("./webpageRoutes");

router.use("/api", apiRoutes);
router.use("/", webpageRoutes);

module.exports = router;
