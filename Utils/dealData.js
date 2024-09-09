const path = require("path");
const filePath = path.join(__dirname,'../config/deals.json');
const fs = require("fs")
exports.readfile = () => {
    return new Promise((resolve,reject) => {
    fs.readFile(filePath,"utf8",(err,data) => {
        if(err){
            reject(err);
        }else{
            resolve(JSON.parse(data));
        }
    })
})
}
exports.writefile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath,JSON.stringify(data),"utf8",(err)=> {
            if(err){
                reject(err)
            }else{
                resolve();
            }
        })

    })
    
}