'use strict';

var _json2csv = require('json2csv');

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = ['serialnumber.matchserialnumber', 'serialnumber.serialnumbermatch', 'transactionid', 'transactiontype', 'storenumber', 'employeeid', 'hostname', 'transactiondatetime', 'devicetype', 'devicebrand', 'powersupply', 'power', 'synccontroller', 'storage', 'wifi', 'gametest.discloading', 'gametest.playresult', 'gametest.videoquality', 'summary.testresult', 'summary.barcode', 'result'];

var json2csvParser = new _json2csv.Parser({ fields: fields });
var csv = json2csvParser.parse(_data2.default);

console.log(csv);