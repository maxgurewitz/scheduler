var ld = require('lodash');

// ['name', 'total_hours', 'available_times', 'task_preferences']
function initialize (rows) {

  var jobs = ld.reduce(ld.range(rows[0][2].length), function (jobs, i) {
    job = {};
    job[i] = null;
    ld.extend(jobs, job);
  }, {});

  var students = ld.map(rows, function (row) {
    return {
      name: row[0],
      available_hours: row[1],
      total_hours: row[1],  
    }; 
  }); 

  return { students: students }; 
}

module.exports = initialize;
