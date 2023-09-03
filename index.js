// const http = require("http");
import http from "http";
// const gfname = require("./features");
import gfname, { abhyudaya, dev } from "./features.js";
import {} from "./features.js";
import path from "path"
// console.log(path.extname("/home/rab"))
import { baby } from "./features.js";
import fs from "fs"
const home=fs.readFileSync("./index.html",()=>{
    console.log("File read")
});
console.log(home)
// console.log(baby());
console.log(gfname);
console.log(abhyudaya);
console.log(dev);
// console.log(http)
const server = http.createServer((request, response) => {
  // console.log("sErver is working")
  // console.log(request.url)
  if (request.url === "/about") {
    response.end(`<h1>HEy ${baby()}</h1>`);
  } else if (request.url === "/") {
    response.end("home");
  } else if (request.url === "/Contact") {
    response.end(home);
  } else {
    response.end("Error");
  }
});

server.listen(5000, () => {
  console.log("server is working");
}); 