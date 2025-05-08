const express = require('express')
const router = new express.Router()
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
router.use(bodyParser.json())
router.use(cors())



router.post('/register', (req, res) => {

  let email=req.body.user.email
  let name=req.body.user.name
  let password=req.body.user.password

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                host: "smpt.gmail.com",
                user: "archanag2205@gmail.com",
                pass: "cxsu wqqi zien ktha"
            }
        })

        const mailOptions = {
            from: "archanag2205@gmail.com",
            to: email,
            subject: " data verification",
            html:
                '<p>Name: ' + req.body.user.name + '</p>' +
                '<p>Email: ' + req.body.user.email + '</p>' +
                '<p>Password: ' + req.body.user.password + '</p>' +
                '<a href="http://localhost:8001/OKsignin/'+ name+'/'+email+'/'+password+' ">OK</a>' + '             ' +
                    '<a href="http://localhost:5173/signup">Update</a>'
    }
        transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err

        console.log("email sent" + info.response);
        res.status(201).json({ status: 201, info })
      

    })
}
    catch (error) {
    res.status(201).json({ status: 401, error })
}
})






module.exports = router