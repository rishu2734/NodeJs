var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harsh.gupta2734@gmail.com',
    pass: 'ilrrkuucwqgpfoad'
  }
});

var mailOptions = {
  from: 'harsh.gupta2734@gmail.com',
  to: 'harsh.gupta2734@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});