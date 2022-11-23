var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'federico.marcelo.molinas@gmail.com',
        pass: 'mypassword' /* cambiar mi contraseña*/ 
    }
});

var mailOptions = {
    from: 'yourmail@gmail.com',
    to: 'myClientmail@yahoo.com',
    subject: 'sending this using nodejs',
    text: 'thats was easy',
};

transporter.sendMail(mailOptions, function(err, info){
    if(error) {
        console.log(error)
    }else{
        console.log('Email sent:' + info.response)
    }
})