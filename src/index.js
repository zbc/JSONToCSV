import { Parser } from 'json2csv';
import fs from 'fs';
import recursive from 'recursive-readdir';
import readlineSync from 'readline-sync';

import fields from './fields';

const newLine = '\r\n';
let count = 0;
let total = 0;

const printProgress = (progress) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${Number(progress * 100).toFixed(0)}%`);
};

const dirName = readlineSync.question('Please enter the input directory of data you want to convert: ');
let outputDir = readlineSync.question('Please enter the output directory you want to save: ');
let outputName = readlineSync.question('Please enter the csv file name you want to save: ');
if (outputDir[outputDir.length - 1] !== '/') {
  outputDir += '/';
}
outputName += '.csv';

recursive(dirName, (dirError, files) => {
  if (dirError) {
    console.log(`Directory Error: ${dirError}`);
  } else {
    total = files.length;
    files.forEach((fileName) => {
      fs.readFile(fileName, 'utf8', (readFileError, data) => {
        if (readFileError) {
          console.log(`Read File Error: ${readFileError}`);
        } else {
          const consoleData = JSON.parse(data);
          if (fs.existsSync(`${outputDir}${outputName}`)) {
            const json2csvParser = new Parser({ fields, header: false });
            const csv = json2csvParser.parse(consoleData) + newLine;
            fs.appendFile(`${outputDir}${outputName}`, csv, 'utf8', (appendFileError) => {
              if (appendFileError) {
                console.log(`Append File Error: ${appendFileError}`);
              } else {
                count += 1;
                printProgress(count / total);
              }
            });
          } else {
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(consoleData) + newLine;
            fs.writeFile(`${outputDir}${outputName}`, csv, 'utf8', (writeFileError) => {
              if (writeFileError) {
                console.log(`Append File Error: ${writeFileError}`);
              } else {
                count += 1;
                printProgress(count / total);
              }
            });
          }
        }
      });
    });
  }
});
