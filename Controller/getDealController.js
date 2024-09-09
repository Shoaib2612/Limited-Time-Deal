const {getDeal,getDealWithId } = require("../Service/getDealService")

exports.getDeal = async(req,res,next) => {
    try{
        const data = await getDeal();
        return res.status(200).json({"Status":"Successfull","Data":data});
    }catch(error){
        next(error);
    }
}

exports.getDealWithId = async(req,res,next) => {
    try{
        const id = req.params.dealId;
        const data = await getDealWithId(id);
        return res.status(200).json(data);
    }catch(error){
        next(error);
    }
}