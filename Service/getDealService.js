const {readfile} = require("../Utils/dealData")

exports.getDeal = async() => {
    try{
        const data = await readfile();
        return data;
    }catch(error){
        throw new Error(error);
    }
}
exports.getDealWithId = async(id) => {
    try{
        const deals = await readfile();
        const deal = deals.find((deal) => deal.id == id);
        if(deal){
            return {"Status":"Successfull","Data":deal}
        }
        return "Deal not found or is inactive";
    }catch(error){
        throw new Error(error);
    }

}