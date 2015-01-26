var initialize = require('./initialize');

//  S = students whose total < available and allowed_jobs.length > 0
//  while S.length > 0
//    s = randomly chosen S 
//    j = most highly ranked job which is allowed, fits within available hours and is unassigned
//    if j is free assign s to j
//    if j is assigned
//      s_a = student who is assigned to j
//      if s prefers j more than s_a 
//        assign s to j
//        unassign s_a to j
//    
//    s.allowed_jobs = s.allowed_jobs without j
//    update S to account for new assignments/unnassignments

function apply_and_swap (rows) {
  var init = initialize(rows);
  var students = init.students;
  var jobs = init.jobs;
  return [1,2,3];
}

module.exports = apply_and_swap;
