// let's see if jest works properly

// it('Testing to see if jest works', ()=>{
//     expect(2).toBe(2)
// } )


const app = require(__dirname+"/server.js");
const supertest = require("supertest");
const request = supertest(app);


test("test the home route endpoint" , async ()=>{
    // send the GET request to the /test endpoint

    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!")
} )


// test ("test what happens if we want a specific currency", async ()=>{
//     const response = await request.get("/currency=EUR")
//     expect(response.body).toBe(__dirname+"/testJSON.js")
// } )