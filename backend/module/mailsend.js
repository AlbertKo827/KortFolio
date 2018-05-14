const path = require('path');

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
    // var maildata = '{"from": "myeongsku@gmail.com","to": "myeongsku@naver.com","subject": "test","text": "이름 : ' + body.name + "₩n연락처 : " + body.tel + "₩n내용 : " + body.body+'"}'
    var text = '이름 : ' + body.name + "\\r\\n" + "연락처 : " + body.tel + "\\r\\n" + "내용 : " + body.body
    var maildata = {
        from: 'myeongsku@gmail.com',
        to: 'myeongsku@naver.com',
        subject: 'test',
        text : text// text: text.replace(/₩n/gi,"\\r\\n")
    };

    var maildata2 = {
        from: 'myeongsku@gmail.com',
        to: body.email,
        subject: '연락주셔서 감사합니다!!',
        text : text,// text: text.replace(/₩n/gi,"\\r\\n"),
        attachments : [
            {
                path : path.join(__dirname, 'attachments/aaa.pages')
            }
        ]
    };
    
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

    // console.log(JSON.parse(maildata.replace(/₩n/gi,"\\r\\n")));

    // transporter.sendMail(JSON.parse(maildata.replace(/₩n/gi,"\\r\\n")), (error, info)=>{
    //     if (error){
    //         console.log(error);
    //     }
    //     else {
    //         console.log('Email sent! : ' + info.response);
    //     }
    //     transporter.close();
    // });

    transporter.sendMail(maildata, (error, info)=>{
        if (error){
            console.log(error);
        }
        else {
            console.log('Email sent! : ' + info.response);
        }
        transporter.close();
    });

    transporter.sendMail(maildata2, (error, info)=>{
        if (error){
            console.log(error);
        }
        else {
            console.log('Email sent! : ' + info.response);
        }
        transporter.close();
    });
}