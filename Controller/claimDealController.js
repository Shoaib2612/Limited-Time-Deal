const {claimDeal} = require("../Service/claimDealService");

exports.claimDeal = async(req,res,next) => {
    const id = req.params.dealId;
    try{
        const result = await claimDeal(id);
        return res.json(result);
    }catch(error){
        next(error);
    }
}