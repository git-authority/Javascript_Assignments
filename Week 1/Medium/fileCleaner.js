const fs = require("fs")

let input = ""

fs.readFile("input.txt", "utf-8", function (err, data) {
    if (err) {
        console.log("Error Reading from File")
        return
    }
    setTimeout(() => console.log("Reading File..."), 1000)

    input = data

    let output = ""

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            output += input[i]
        }
        else if (input[i] === " " && input[i + 1] === " ") {
            continue
        }
        else if (input[i] === " " && input[i + 1] !== " ") {
            output += input[i]
        }
    }

    fs.writeFile("output.txt", output, "utf-8", function (err, data) {
        if (err) {
            console.log("Error Writing to File");
            return;
        }
        else {
            setTimeout(() => console.log("\nWriting to File..."), 2000)
        }
        setTimeout(() => console.log("\nWriting to File Complete"), 3000)
    })
})
