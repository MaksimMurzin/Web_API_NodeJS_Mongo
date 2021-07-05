const mongoose = require("mongoose");
const data = require("./data");

mongoose.connect("mongodb://localhost:27017/apiPractice", {useNewUrlParser: true});



// ===================== portfolios ==================================
//#region
const portfolioSchema = new mongoose.Schema({
    id: Number,
    name: String
});


const Portfolio = mongoose.model("Portfolio", portfolioSchema);

const port1 = new Portfolio({
    id: 1,
    name: "Investor 1"
});

const port2 = new Portfolio({
    id: 2,
    name: "Investor 2"
});

const port3 = new Portfolio({
    id: 3,
    name: "Investor 3"
});


// Portfolio.insertMany([port1, port2, port3] , (err)=> {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved all the portfolios to portfoliosDB")
//     } 
// } )

//#endregion

//===================== positions ====================================
//#region 
const positionSchema = new mongoose.Schema({
    id: Number,
    portfolioId: Number,
    currency: String,
    value: Number,
    date: String
});

const Position = mongoose.model("Positions", positionSchema);
// Position.insertMany(data.positions, (err)=> {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved all the positions to positionsDB")
//     } 
// } )
//#endregion    


const Ports = [];
const Pos = [];

Portfolio.find( {}, (err, foundItems) => {foundItems.forEach(item => { 
    Ports.push(item)})
}) 

Position.find({}, (err, foundItems) => {
    foundItems.forEach(item => { 
        Pos.push(item)})

});

module.exports = [ Ports, Pos ];
