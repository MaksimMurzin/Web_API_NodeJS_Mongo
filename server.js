//this file will be used for testing purposes

"use strict";

const express = require("express");
const data = require("./Model/data")
const app = express();
const db = require("./Model/database")


//this is currently not working as intended I will look into this as a future improvement
const [Portfolios, Positions] = db;

//there's probably a more elegant way but when pressed for time I stick to the basics rather than abstractions
//I am concerned about the time complexity of this, nested loops will cause O^2 which will be a nightmare for a big database

const loadPortfolios = function (){

    // const positionsObject;
    // const portfolioObject;
    // const listOfPositions = [];
    // const listOfPortfolios = [];

    // Portfolios.forEach(port => {

    //     listOfPortfolios.push({
    //         id: port.id,
    //         name: port.name
    //     })
    // })

    // listOfPortfolios.forEach(port => {
    //     port.positions = [];
    //     Positions.forEach(pos => {
    //         if(port.id === pos.portfolioId){
    //             port.positions.push(pos);
    //         }
    //     });
    // })
    
    let mutatedPortfolios = Portfolios;
    mutatedPortfolios.forEach(portfolio => {   
        portfolio["positions"] = [];     
        Positions.forEach(pos => {
            if(portfolio.id == pos.portfolioId){
                portfolio["positions"].push(pos) ;
                console.log(this.portfolio["positions"]);
            }
        });
    } );
    return mutatedPortfolios;
} 

app.get("/", (req,res)=>{

    const ports = loadPortfolios()
    // res.send("<h1> hello world </h1>");
    res.send(ports);
    });

app.get("/currency=:currency", (req,res) => { 

    //this works for now, because every time we get a request we get a fresh batch of portfolios,
    //however I would like to investigate if there's a way to do this only once and still get consistent results
    loadPortfolios();
    const desiredCurrency = req.params.currency.toUpperCase();
    extractedPortfolios.forEach(port => {
        port.positions = port.positions.filter( pos => pos.currency === desiredCurrency)
    })
    res.send(extractedPortfolios);
});

app.get("/test",  (req,res)=> {res.json({message: "pass!"})} );

module.exports = app;