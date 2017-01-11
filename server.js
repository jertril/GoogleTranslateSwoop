const token = require('google-translate-token');
var express = require('express')

var app = express()

app.get('/:sentence', function (req, res) {
    token.get(req.params.sentence).then(function (t) {
        res.send(t);
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

