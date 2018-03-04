const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport') 

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'myeongsku@gmail.com',
        pass: 'g115nice08'
    }
}));

var mailOptions = {
    from: 'myeongsku@gmail.com',
    to: 'myeongsku@naver.com',
    subject: 'test',
    text: 'test'
};

module.exports.send = () => transporter.sendMail(mailOptions, (error, info)=>{
    if (error){
        console.log(error);
    }
    else {
        console.log('Email sent! : ' + info.response);
    }
    transporter.close();
});