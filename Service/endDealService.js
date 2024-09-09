const {readfile,writefile} = require("../Utils/dealData");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname,'../config/deals.json');

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
exports.autoEndDeal = () => {
    setInterval(() => {
        fs.readFile(filePath,'utf-8',(err,data) => {
            if(err){
                console.error("Error reading file ",err)
                return;
            }
        })
        const deals = JOSN.parse(data);
        const currentTime = new Date().getTime();
        let updated = false;
        deals.forEach((deal) => {
            if(deal.active && deal.endTime <= currentTime){
                deal.active = false;
                updated = true;

            }
        })
        if(updated){
            fs.writeFile(filePath,JSON.stringify(deals),'utf8');
        }
    },60000);

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