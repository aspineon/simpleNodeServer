var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'application')))

var server = app.listen(3010, function () {
    var port = server.address().port
})
