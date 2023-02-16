// how to use fs module to write or save content to a file in node js

const request = require('request');
const fs = require('fs') 

console.log("url is ", process.argv, )

const url = process.argv[2]
const pathToSave = process.argv[3]
request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(pathToSave, body, (err) => { 
    if(err) {
    throw err; 
    }
   console.log("Data has been written to file successfully."); 
    console.log("Downloaded and saved " + body.length + " bytes to ./index.html") 
  }); 
  
  
});
