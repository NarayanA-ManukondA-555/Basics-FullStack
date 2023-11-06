// // filesystem
// const fileSystem = require("fs");
// fileSystem.writeFile("noddy.txt","Hello Noddy!",function(err,result){
//   if(err) {
//     console.log(err);
//   }
// });

// // Removing the previously added file
// const fileSystem = require("fs");
// fileSystem.unlink("noddy.txt",function(err,result){
//   if(err) {
//     console.log(err);
//   }
// });

// // Creating new directory or new folder or empty folder
// const fileSystem = require("fs");
// fileSystem.mkdir("noddy",function(err,result){
//   if(err) {
//     console.log(err);
//   }
// });

// // Removing the previously added folder
// const fileSystem = require("fs");
// fileSystem.rmdir("noddy",function(err,result){
//   if(err) {
//     console.log(err);
//   }
// });

// // OPERATING SYSTEM
// const operatingSystem = require("os");
// console.log(operatingSystem.platform());

// // Checking bit of OS
// const operatingSystem = require("os");
// console.log(operatingSystem.arch());

// HTTP
const http = require("http");
http.createServer((request,response) => {
  console.log(request.headers);
  response.end("Wow! Noddy!");
}).listen(3000);
// then open newtab in chrome & type 'localhost:3000' & press enter, gives the response
