const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    // here you write your next line
    writeFile('./temporary/fileB.txt', "Here is line number 2.\n", {flag: 'a'}, (err, result) => {
        console.log("at point 2");
        if(err) {
            console.log('the error: ', err);
        } else{
            writeFile ('./temporary/fileB.txt', "Here is line number 3.\n", {flag: 'a'}, (err, result) => {
                console.log("at point 3");
                if(err) {
                    console.log('the error: ', err);
                } else{
                    console.log("The lines ended");
                }
            });
        }
    });
  }
});
console.log("at end");