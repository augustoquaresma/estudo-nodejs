var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'exemplo',
    auth: {
        user: 'email',
        pass: 'senha'
    }
})

var mailOptions =  {
    from: 'emailIda',
    to: 'emailReceber',
    subject: 'Envio de email com o Nodejs',
    text: 'É muito fácil para enviar'
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email enviado: '+info.response)
    }
})