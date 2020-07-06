#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

// Method 2
// const lstat = util.promisify(fs.lstat);

// Method 3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    }

    const statPromises = filenames.map((filename) => {
        return lstat(filename);
    });

    const allStats = await Promise.all(statPromises);

    for (let i = 0; i < filenames.length; i++) {
        const filename = filenames[i];
        const stat = allStats[i];

        if (stat.isFile()) {
            console.log(filename);
        }
        else {
            console.log(chalk.bold.blue(filename));
        }
    }
})

// Method 1
// function lstat(filename) {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) reject(err);

//             resolve(stats);
//         })
//     })
// }