const {readfile,writefile} = require("../Utils/dealData");

exports.endDeal = async(id) => {
    try{
        const deals = await readfile();
        const deal = deals.find((deal) => deal.id == id);
        if(deal && deal.active == true){
            deal.active = false;
            await writefile(deals);
            return {"Status":`Successfully ended the deal of id ${id}`};
        }else{
            return {"error":`Deal with id ${id} does not exist or is not active`};
        }
    }catch(error){
        throw new Error(error);
    }
}

exports.deleteDeal = async(id) => {
    try{
        const deals = await readfile();
        const deal = deals.find((deal) => deal.id == id);
        if(deal){
            const newDeals = deals.filter((deal) => deal.id != id);
            await writefile(newDeals);
            return {"Status":`Successfully deleted the deal of id ${id}`}
        }else{
            return {"Status":`Error....Deal with id ${id} not found`}
        }    
    }catch(error){
        throw new Error(error);
    }
}