
const {endDeal, deleteDeal} = require("../Service/endDealService");

exports.endDeal = async(req,res,next) => {
    try{
        const id = req.params.dealId;
        const result = await endDeal(id);
        return res.json(result);
    }catch(error){
        next(error);
    }
}

exports.deleteDeal = async(req,res,next) => {
    try{
        const id = req.params.dealId;
        const result = await deleteDeal(id);
        return res.json(result);
    }catch(error){
        next(error);
    }
}