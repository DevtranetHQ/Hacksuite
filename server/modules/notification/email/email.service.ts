import { INotification } from "../notification.model";
import nodemailer from "nodemailer";
import { config } from "../../../config";

const { mailer, APP_NAME } = config;

const transporter = nodemailer.createTransport({
  host: mailer.HOST,
  port: parseInt(mailer.PORT, 10),
  secure: mailer.SECURE,
  auth: {
    user: mailer.USER,
    pass: mailer.PASSWORD
  }
});

class EmailService {
  async sendEmailNotification(email: string, notification: INotification) {
    const mailOptions = {
      from: `${APP_NAME} <${mailer.USER}>`,
      to: email,
      subject: notification.title,
      text: notification.message
    };
    return transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailService();
