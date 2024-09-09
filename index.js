const dealRouter = require("./Routes/dealRouter")
const {autoEndDeal} = require("./Service/endDealService");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

autoEndDeal();
app.use("/api/deals/",dealRouter);

app.use((err,req,res,next) => {
    return res.status(500).json({"Error":err});
})
const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server has begun in Port ${port}`);
})