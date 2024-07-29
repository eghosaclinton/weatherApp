"use strict";

// Make an HTTP request to the /json/ route of our express server:
let theData = fetch("http://localhost:3000/")
// Get the request body and convert to JSON:
.then((res)=> res.json())
// Here we have the request body as a JSON object ready to be used:
.then((data)=>{

    console.log(data);
  

})
.catch(console.error);


