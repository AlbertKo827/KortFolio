const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport') 

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'myeongsku@gmail.com',
        pass: 'g115nice08'
    }
}));

module.exports.send = (body) => {
    var maildata = '{"from": "myeongsku@gmail.com","to": "myeongsku@naver.com","subject": "test","text": "이름 : ' + body.name + "₩n연락처 : " + body.tel + "₩n내용 : " + body.body+'"}'

    // transporter.sendMail({
    //     from: 'myeongsku@gmail.com',
    //     to: 'myeongsku@naver.com',
    //     subject: 'test',
    //     text: "이름 : " + body.name + "₩₩n" + "연락처 : " + body.tel + "₩₩n" + "내용 : " + body.body
    // }, (error, info)=>{
    //     if (error){
    //         console.log(error);
    //     }
    //     else {
    //         console.log('Email sent! : ' + info.response);
    //     }
    //     transporter.close();
    // });
    console.log(JSON.parse(maildata.replace(/₩n/gi,"\\r\\n")));
    transporter.sendMail(JSON.parse(maildata.replace(/₩n/gi,"\\r\\n")), (error, info)=>{
        if (error){
            console.log(error);
        }
        else {
            console.log('Email sent! : ' + info.response);
        }
        transporter.close();
    });
}