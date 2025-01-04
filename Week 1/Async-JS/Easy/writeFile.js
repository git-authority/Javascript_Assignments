const fs = require("fs")

fs.writeFile("output.txt", "Writing to file", "utf-8", function(err, data){
    if(err){
        console.log("Error Writing to File")
        return
    }
    console.log(data)
})