import nodemailer from "nodemailer";
import { CustomError } from "../../utils/customError";
import { config } from "../../config";

const { mailer, APP_NAME } = config;

export default class MailService {
  constructor(user) {
    this.user = user;
  }

  async send(subject, content, recipient, from) {
    from = from || `${APP_NAME} <no-reply${mailer.DOMAIN}>`;
    content = content || " ";

    if (!recipient || recipient.length < 1) throw new CustomError("Recipient is required");
    if (!subject) throw new CustomError("Subject is required");

    // Define nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: mailer.HOST,
      port: mailer.PORT,
      secure: mailer.SECURE,
      auth: {
        user: mailer.USER,
        pass: mailer.PASSWORD
      }
    });

    let result;
    try {
      result = await transporter.sendMail({
        from,
        to: Array.isArray(recipient) ? recipient.join() : recipient,
        subject,
        text: content
      });
    } catch (err) {
      console.err(err);
      throw new CustomError("Cannot send email. Invalid transporter.");
    }

    if (!result) throw new CustomError("Unable to send mail");
    return result;
  }

  async sendEmailVerificationMail(link) {
    const subject = "Email Verification";
    const content = `Hi ${
      this.user.firstName ? this.user.firstName : ""
    }! Please click on the link to verify your email ${link}`;
    const recipient = this.user.email;

    return await this.send(subject, content, recipient);
  }

  async sendPasswordResetMail(link) {
    const subject = "Reset password";
    const content = `Hey ${this.user.firstName}, Please click on the link to reset your password ${link}`;
    const recipient = this.user.email;

    return await this.send(subject, content, recipient);
  }
}
