#!/usr/bin/env node
var fs = require('fs');
var exec = require('child_process').exec
var idx = require('..');

var inPath = './tmp/sample_data.csv';
var outPath = './tmp/sample_output.csv';
var ws = fs.createWriteStream(outPath);

idx.io.read_from_csv(inPath)
  .map(idx.schedulers.apply_and_swap)
  .map(toString)
  .pipe(ws)

function toString (values) {
  return String(values);
}

function print(output) {
  console.log('output', output);
  exec('echo "output' + output + '"');
  return output;
}
