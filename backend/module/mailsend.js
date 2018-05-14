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
    var text = '이름 : ' + body.name + "\r\n" + "연락처 : " + body.tel + "\r\n" + "내용 : " + body.body
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
        text : body.name + "님!!" + "연락주셔서 정말 감사합니다!\r\n" + "이메일은 제가 바로 확인이 불가능 할 수도 있기때문에 010-4814-6109로 바로 연락주시면 감사하겠습니다.\r\n"
                + "채용 목적이라면 이력서를 함께 첨부하였으니 확인 해주세요!",
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