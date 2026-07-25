const nodemailer = require("nodemailer");

const mailSender = async (email,title, body) => {
    try{
        let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        });

        await transporter.verify();
console.log("SMTP Connected");
console.log(process.env.MAIL_HOST);
console.log(process.env.MAIL_USER);
console.log(process.env.MAIL_PASS ? "PASS FOUND" : "PASS MISSING");


        let info = await transporter.sendMail({
            from: `"StudyNotion" <${process.env.MAIL_USER}>`,
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })

        console.log(info);
        return info;
    }

    catch(error){
            console.error("Mail Error:", error);
    throw error;
    }
}

module.exports = mailSender;