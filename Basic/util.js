"use strict";
exports.__esModule = true;
exports.createResultFile = void 0;
var fs = require('fs');
var createResultFile = function (fileName, fileContent) {
    fs.writeFile(fileName, fileContent, 'utf8', function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('result saved successful!');
        }
    });
};
exports.createResultFile = createResultFile;
