const express = require("express");
const router = express.Router();
const dealMiddleware = require("../Middleware/dealMiddleware")
const {createDeal, updateDeal} = require("../Controller/createDealController")
const {claimDeal} = require("../Controller/claimDealController")
const {getDeal, getDealWithId } = require("../Controller/getDealController")
const {endDeal, deleteDeal} = require("../Controller/endDealController")

router.get("/",getDeal);
router.get("/:dealId",getDealWithId);
router.post("/create",dealMiddleware,createDeal);
router.put("/update/:dealId",dealMiddleware,updateDeal)
router.post("/claim/:dealId",dealMiddleware,claimDeal)
router.put("/end/:dealId",dealMiddleware,endDeal);
router.delete("/delete/:dealId",dealMiddleware,deleteDeal);

module.exports = router;