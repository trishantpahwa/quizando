const express = require('express');
const cors = require('cors');

var app = express();

app.use(cors());


app.get('/search/:question/:answer1/:answer2/:answer3/:answer4', function(req, res) {
    var question = req.params.question;
    var answer1 = req.params.answer1;
    var answer2 = req.params.answer2;
    var answer3 = req.params.answer3;
    var answer4 = req.params.answer4;
    var iframe1 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer1.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe2 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer2.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe3 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer3.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe4 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer4.toString() + '" height="100%" width="24.3%"></iframe>';
    res.send('<html><body>' + iframe1 + iframe2 + iframe3 + iframe4 +'</body></html>');
});

app.get('/search-color/:question/:answer1/:answer2/:answer3/:answer4', function(req, res) {
    var question = req.params.question;
    var answer1 = encodeURI('\"' + req.params.answer1 + '\"');
    var answer2 = encodeURI('\"' + req.params.answer2 + '\"');
    var answer3 = encodeURI('\"' + req.params.answer3 + '\"');
    var answer4 = encodeURI('\"' + req.params.answer4 + '\"');
    var iframe1 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer1.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe2 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer2.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe3 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer3.toString() + '" height="100%" width="24.3%"></iframe>';
    var iframe4 = '<iframe src="http://www.google.com/search?q=' + question.toString() + ' ' + answer4.toString() + '" height="100%" width="24.3%"></iframe>';
    res.send('<html><body>' + iframe1 + iframe2 + iframe3 + iframe4 +'</body></html>');
});


app.listen(3000, function() {
    console.log('server started at 3000');
});