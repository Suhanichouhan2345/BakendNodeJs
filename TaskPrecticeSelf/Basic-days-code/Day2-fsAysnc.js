const fs = require('fs');

fs.writeFile('shree raam.txt', "Shree Ram",(err)=>{
    if(err){
        console.error("Worng Something " , err);
    }else {
        console.log("SitaRam :) ",err); // null if no error
    }
})

fs.appendFile('shree Raam.txt', "\n SitaRamHanuman SitaRamHanuman Jai Shree Ram",(err)=>{
    if(err){
        console.error('Bhagwan ka naam nhi bol raha papi ', err);
    }else{
        console.log("Hari Bol Hari Bol :) ShreeRaamHanuman SitaRam :) ");
    }
}) // if is forget to .txt they make other text file

fs.readFile('./SitaRam/Radhe.txt' ,"utf-8", (err,data)=>{
    if(err){
        console.error("Bohot paap kr liye papi tune dekh tare paap " , err);
    } else{
        console.log("Hari Bol Hari Bol :} ", data );
    }
})
//outpute : Hari Bol Hari Bol :}  console.log("HAREE RAAM SITARAMHANUMAN JI");

fs.mkdir("SitaRam", (err)=>{
    if(err){
        console.error("Shree Raam Bol Shree Raam " ,err);
    } else{
        console.log("Hari Bol Hari Bol :} ");
    }
})