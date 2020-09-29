const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const htmlTemplates = require('../email-templates');
const path = require('path');

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});
console.log (path.join(process.cwd(), 'email-templates'));
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'admin@gmail.com',
        pass: 'passAdmin'
    }
});

class EmailService {
    async sendMail(userMail, context) {
        try {
            const templateInfo = htmlTemplates.welcome;
            const html = await emailTemplates.render(templateInfo.templateFileName, {context})

            const mailOptions = {
                from: 'from in mail options',
                to: userMail,
                subject: templateInfo.subject,
                html
            };

            return transporter.sendMail(mailOptions);
        } catch (e) {
            console.log ('______________')
            console.log (e)
            console.log ('______________')
        }
    }
}
module.exports = new EmailService();
