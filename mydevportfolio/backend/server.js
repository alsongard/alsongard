const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); 
const cors = require("cors");
const transporter = require("./nodemailer_config.js")

const app = express();

const PORT = process.env.PORT || 5000;
const corsOptions = {
	origin: (origin, callback)=>
	{
		if (process.env.NODE_ENV !== "production") // checks the environment at which t's running
		{
			console.log(`[DEV] Allowing origin: ${origin}`)
			return callback(null, true);
		}
		if (!origin)
		{
			return callback(null,true); // remember second argument: returns true(permit domain) or false(permit domain) 
		}
		const allowedDomains = ["http://localhost:3000", "https://alsongard.vercel.app"]

		if (allowedDomains.includes(origin))// not equal the indexOf() method returns -1 if no value ns found in the array
		{
			return callback(null, true); // firstArgument: if we are expecting an error set this value as shown in else statemetn
			// second argument: boolean value which indeicates if the origin is allowed(true) : on not allowed(false)
		}
		else
		{
			callback(new Error(`Origin: ${origin} not allowed by cors`));
		}
	},
	methods:["POST", "OPTIONS"],
	credentials:true,
	allowedHeaders: ['Content-Type']
};


app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from the backend server!</h1>");
});

app.post("/api/emails", async (req, res)=>{
    const {message, userEmail, name, phoneNumber} = req.body;
    if(!message || !userEmail || !name || !phoneNumber)
	{
		return res.status(400).json({success:false, msg:"Invalid Input"})
	}
    const userData = {
        from: "alsongadizo@gmail.com",
        to: "alsongadizo@gmail.com", // to is to your email not the sender 
        subject: `Subject: Project Request from ${name}`,
        text: `phoneNumber: ${phoneNumber}\nMessage: ${message}`,
        replyTo: userEmail
    }
    const result = await transporter.sendMail(userData);
    console.log(`result`);
    console.log(result);
    const result_array = result.response.split(" ");
    if (result_array[0] == '250')
    {
      console.log('Email successfully received');
      let my_new_email = {
        from: "alsongadizo@gmail.com",
        to: userEmail,
        subject: `Subject: email recieved`,
        text: "Your email has been received. I will get back to you."
      }
      const new_email_response = await transporter.sendMail(my_new_email);
      console.log(new_email_response);
      return res.json({status:"success", msg:"Email successfully sent."});
    }
    else
    {
      return res.status(200).json({status:"false", msg:"Email not received."})
    }
})

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


module.exports = app;