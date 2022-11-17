const fs = require("fs") ;
const path = require('path')


function eran() {
const fileFullName2 = path.join(__dirname, './siteMap/siteMapFile.json')
fs.readFile(fileFullName2, 'utf-8', (error, htmlString) => {
    var hmtls= htmlString;
    console.log(hmtls);

}
)

}

