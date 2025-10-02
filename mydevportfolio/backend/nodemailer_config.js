const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
	port: 587, 
    secure:false,
	auth: {
		user: "alsongadizo@gmail.com", // always set the gmail that was used to create the password for the gmail
		pass: process.env.ANOTHER_APP_PASSWORD // the password for your app
	}
});

module.exports = transporter;