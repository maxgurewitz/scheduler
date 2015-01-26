#!/usr/bin/env node
var debug = require('debug')('express-skeleton');
var app = require('../app');
var settings = require('../settings');

app.set('port', settings.port);

var server = app.listen(app.get('port'), function(err) {
    if (err) { console.log(err) }
    debug('Express server listening on port ' + server.address().port);
});

