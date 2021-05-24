const glob = require("glob")

var args = process.argv.slice(2)
console.log('Arguments: ', args)

var getDirectories = function (src, callback) {
    glob(src + '/**/*', { nodir: true }, callback)
};

getDirectories(args[0], function (err, res) {
    if (err) {
      console.log('Error', err);
    } else {
        formartUri(res)
    }
});

formartUri = (files) => {
    const uriFiles = files.map(f => f.replace(args[0], args[1]))
    const json = JSON.stringify(uriFiles, null, '\t')
    const fs = require('fs')

    fs.writeFile(args[2], json, 'utf8', () => { console.log("End...") })
}