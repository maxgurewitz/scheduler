var fs = require('fs');
var hl = require('highland');
var byline = require('byline');
var ld = require('lodash');

function read_from_csv (file) {
  var rs = fs.createReadStream(file);
  return hl(byline(rs))
    .invoke('toString')
    .filter(isHeader)
    .map(toValues)
    .collect()
}

module.exports = read_from_csv;

function isHeader (row) { 
  return !ld.contains(row, 'total_hours');
}

function toValues (row) {
  return ld.invoke(row.split(','), 'split', '|');
}
