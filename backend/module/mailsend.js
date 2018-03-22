const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport') 

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'myeongsku@gmail.com',
        pass: 'g115nice08'
    }
}));

var mailOptions = (body) = {
    from: 'myeongsku@gmail.com',
    to: 'myeongsku@naver.com',
    subject: 'test',
    text: "이름 : " + body.name + "₩n" + "연락처 : " + body.tel + "₩n" + "내용 : " + body.body
};

module.exports.send = (option) => transporter.sendMail(mailOptions(option), (error, info)=>{
    if (error){
        console.log(error);
    }
    else {
        console.log('Email sent! : ' + info.response);
    }
    transporter.close();
});