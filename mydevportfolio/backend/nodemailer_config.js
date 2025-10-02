const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
	port: 587, 
    secure:false,
	auth: {
		user: "alsongadizo@gmail.com",
		pass: process.env.ANOTHER_APP_PASSWORD
	}
});

module.exports = transporter;