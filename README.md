# JSONToCSV
Convert multiple local JSON files to a single CSV file with headers

## Getting Started

### Installing

If you don't have node, please install [Node](https://nodejs.org/en/download/) first

Then run
```
npm install 
```

## Running the code

```
npm start
```
### Then will ask:
1. Please enter your input directory of data you want to convert: `C:\data`
2. Please enter the output directory you want to save: `C:\output`
3. Please enter the csv file name you want to save: `result`

### Change CSV headers file

In **fields.js**, you can edit field name to match with your own JSON properties.

## Built With

* [json2csv](http://www.mircozeiss.com/json2csv/) 
* [readline-sync](https://github.com/anseki/readline-sync)
* [recursive-readir](https://github.com/jergason/recursive-readdir) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

