const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "carlojude22@gmail.com",
    subject: "Welcome!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "carlojude22@gmail.com",
    subject: "Why?",
    text: `Why did you cancel, ${name}?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
