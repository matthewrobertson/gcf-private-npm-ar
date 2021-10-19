// This NPM package is hosted in a private AR repo
var privateNpm = require("@mattsnpmrepo/hello-world");

exports.testPrivateAR = (req, res) => {
    // make sure the package is usable, although we 
    // wouldn't have made it this far if it wasn't...
    res.send(privateNpm.check());
};
  