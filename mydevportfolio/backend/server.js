const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); 
const cors = require("cors");
const transporter = require("./nodemailer_config.js")

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});
console.log(process.env.ANOTHER_APP_PASSWORD)

app.post("/api/emails", async (req, res)=>{
    const {name, body} = req.body;
    const userData = {
        from: userEmail,
        to: "alsongadizo@example.com",
        subject: `Message from ${name}`,
        text: body
    }
    await transporter.sendMail(userData)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/**
 * 
 * from
 * replyTo
 * to 
 * subect
 * text
 */