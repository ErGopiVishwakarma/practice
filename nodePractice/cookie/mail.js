const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alfonzo.morissette71@ethereal.email',
        pass: 'Zg9dkqMzsg9wmypFnc'
    }
})

transporter.sendMail({
    to:"alfonzo.morissette71@ethereal.email",
    from:'abc@gmail.com',
    subject:'this is the backend journey....',
    text:"hii my name is gopi vishwakarma and i am learning nodeJs backend"
})
.then(res=>console.log('mail has been successfully send'))
.catch(err=>console.log('can not send mail' + err))