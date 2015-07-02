var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

///////////// nodemailer
app.post('/', function (req, res) {
    console.log(req.body);
    var mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport('SMTP', {
        host: 'freedomfog.org',
        port: 25,
        auth: {
            user: "support",
            pass: "something"
        }
    });

    //Mail options
    mailOpts = {
        //from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
        from: 'marquez.space' + ' <' + 'support@freedomfog.org' + '>', //grab form data from the request body object
        to: 'richard92m@me.com',
        subject: 'marquez.space contact form',
        text: 'From: ' + req.body.name + ' <' + req.body.email + '>\n\n' + req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            console.log(error);
            res.render('index', { title: 'Richard Marquez', msg: 'Error occured, message not sent.', err: true, page: '/' })
        }
        //Yay!! Email sent
        else {
            console.log('sent');
            res.render('index', { title: 'Richard Marquez', msg: 'Message sent! Thank you.', err: false, page: '/' })
        }
    });

});
/////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
