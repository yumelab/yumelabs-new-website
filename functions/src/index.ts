import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import * as nodeMailer from "nodemailer";
// const cors = require("cors")({origin: true});

/*
 * Here we're using Gmail to send
 */

const transporter = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SENDER_EMAIL_ID,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
  secure: true,
});

const sendMail = onRequest({
  cors: [/firebase\.com$/, "https://yumelabs.com"],
}, async (req, res) => {
  // const body = JSON.parse(req.body);
  const mailOptions = {
    from: process.env.SENDER_EMAIL_ID,
    to: process.env.RECEIVERS_EMAIL_IDS,
    subject: `${req.body.firstName} from ${req.body.company} 🚀`,
    html: `<span>Hi Yume Labs<span><br/><br/>
           <p>${req.body.message}</p><br/><br/>
           <p>
           ${req.body.firstName} <br/> 
           ${req.body.mail} <br/> 
           ${req.body.phone}
           </p>`,
  };

  // logger.info(req.body);
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({message: "Error sending email"});
    } else {
      console.log("Email sent:"+ info.response);
      res.status(200).send({message: "Email sent successfully"});
    }
  });
});

export default sendMail;
