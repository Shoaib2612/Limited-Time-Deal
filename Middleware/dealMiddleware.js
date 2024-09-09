const dealMiddleware = (req,res,next) => {
    const body = req.body;
    if(req.body && req.body.maxItems <= 0){
        return res.json({"Error":"Max Items should be more than zero"})
    }
    if(req.body && req.body.price <= 0){
        return res.json({"Error":"Price should be more than zero"});
    }
    if(req.body && new Date(req.body.endTime) < new Date){
        return res.json({"Error":"Error in Date"});
    }
    next();
}
module.exports = dealMiddleware;