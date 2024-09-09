const {readfile, writefile} = require("../Utils/dealData");

exports.claimDeal = async(dealId) => {
    try{
        const deals = await readfile();
        const deal = deals.find(deal => deal.id == parseInt(dealId));
        if(!deal){
            return {"Error":`Deal with id ${dealId} does not exist.`}
        }
        if(!deal.active){
            return {"Error":"Deal is inactive."}
        }
        if(new Date(deal.endTime)<new Date()){
            return {"Error":"Deal is ended."}
        }
        if(deal.claimedItems >= deal.maxItems){
            return {"Error":"deal has already been claimed by max users"}
        }
        deal.claimedItems+=1;
        await writefile(deals);
        return {"Status":"Deal Claimed Successfully","Deal":deal};
    }catch(error){
        throw new Error(error);
    }
    
}