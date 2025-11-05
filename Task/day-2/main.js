import fs from "fs"

fs.readFile("polinderom.js",(err)=>{
    if(err){
 console.log(err.message);
    }
   
    console.log("filereade sussfully");
    
})


fs.appendFile("polinderom.js","console.log('This append')",(err)=>{
    if(err){
        console.log(err.message);
        
    }
    console.log("fileappend sucssfully");
    
})