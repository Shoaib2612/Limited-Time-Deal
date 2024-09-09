const {createDeal, updateDeal} = require("../Service/createDealService");

exports.createDeal = async(req,res,next) => {
    try{
        const body = req.body;
        const result = await createDeal(body);
        return res.status(200).json(result);
    }catch(error){
        next(error);
    }
}


exports.updateDeal = async(req,res,next) => {
    try{
        const id = req.params.dealId;
        const data = req.body;
        const result = await updateDeal(id,data);
        return res.json(result);
    }catch(error){
        next(error);
    }
}