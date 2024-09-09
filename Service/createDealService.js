const {readfile,writefile} = require("../Utils/dealData")

exports.createDeal = async(body) => {
    try{
        const deals = await readfile();
        const newDeal = {
            id : Date.now(),
            price:body.price,
            maxItems:body.maxItems,
            startTime:new Date(),
            claimedItems:0,
            endTime:body.endTime,
            active:true
        }
        deals.push(newDeal);
        await writefile(deals);
        return {"Status":"Successfull","Deal":newDeal};
    }catch(error){
        throw new Error(error);
    }
}

exports.updateDeal = async(id,body) => {
    try{
        console.log("id : ",id,"body = ",body);
        const deals = await readfile();
        const deal = deals.find((deal) => deal.id == id);
        console.log("dealll : ",deal)
        if(deal && deal.active){
            if(body.maxItems)deal.maxItems = body.maxItems;
            if(body.price)deal.price = body.price;
            if(body.endTime)deal.endTime = body.endTime;
            await writefile(deals);
            return {"Status":`Successfully updated deal of id ${id}`,"Updated Deal":deal};
        }else{
            return {"Error":`Deal with id ${id} is not found or is inactive`}
        }
    }catch(error){
        throw new Error(error);

    }
}