#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
    if (err) {
        console.log(err);
    }

    for (let file of files) {
        console.log(file);
    }
})
