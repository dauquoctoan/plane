const nodemailer = require('nodemailer');

export interface ISendMailInfo {
  email: string;
  workspaceName: string;
  href: string;
}

export interface ISendMailPin {
  email: string;
  pin: string;
}

export function sendMail({ email, workspaceName, href }: ISendMailInfo) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dqtoan0123@gmail.com',
      pass: 'njnu jnyg mfpp pozp',
    },
  });

  const mailOptions = {
    from: 'dqtoan0123@gmail.com',
    to: email,
    subject: `Confirmed Member of ${workspaceName} workspace`,
    html: `
        <p>Hello ${email},</p>
        <p>You are invited to participate in our <span style="font-weight: 700;font-size:16px;">${workspaceName}</span> workspace. This is the confirmation email.</p>
        <a href="${href}">join</a>
        <p>We are delighted to welcome you!</p>
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });
}

export function sendPinToMail({ email, pin }: ISendMailPin) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dqtoan0123@gmail.com',
      pass: 'njnu jnyg mfpp pozp',
    },
  });

  const mailOptions = {
    from: 'dqtoan0123@gmail.com',
    to: email,
    subject: `Your unique Plane login code is ${pin}`,
    html: `
      <h1>The code below is only valid for 10 minutes.</h1>
      <h2>${pin}</h2>
      <p>Please copy and paste this on the screen where you requested this from.</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });
}
