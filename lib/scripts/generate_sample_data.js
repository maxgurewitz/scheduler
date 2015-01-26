var fs = require('fs');
var ld = require('lodash');
var faker = require('faker');
  
var rowNum = 100;
var totalHoursEnum = [1, 3, 5];
var availableTimeNum = 20;
var taskPreferenceNum = 30;
var ws = fs.createWriteStream('./tmp/sample_data.csv');

ws.write(row(['name', 'total_hours', 'available_times', 'job_preferences']));
ld.times(rowNum, function () {
  ws.write(row(generateRow()));
});
ws.end()

function generateRow () {
  var name = faker.name.findName();
  var totalHours = ld.sample(totalHoursEnum);
  var availableTimes = ld.times(availableTimeNum, function () { return ld.sample([0, 1]); }).join('|');
  var taskPreferences = ld.times(taskPreferenceNum, function () { return ld.random(0, 5); }).join('|');
  return [name, totalHours, availableTimes, taskPreferences];
}

function row(a) {
  return a.join(',') + '\n';
}
