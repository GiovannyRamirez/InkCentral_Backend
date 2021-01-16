const nodemailer = require('nodemailer');


exports.transporter = nodemailer.createTransport({
    host: 'smtp.aol.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
})

exports.welcome = (client) => {
  return {
    from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
    to: client.email,
    subject: 'Welcome',
    html: `
      <div>
        <h1>Welcome to InkCentral</h1>
        <p>It is a pleasure for us, for you to start being part of the Ink family</p>
      </div>
    `,
    text: `Welcome\n\n${client.name}`,
  }
}
exports.updateConfirmation = (client) => {
  return {
    from:`"${process.env.MAIL_USERNAME}"<${process.env.MAIL_USER}>`,
    to: client.email,
    subject: "Your profile with InkCentral has been updated!",
    html:`
      <div>
        <h1>${client.name}</h1>
        <p>Your personal information has been updated and saved to our database.</p>
      </div>
    `
  }
}

exports.deleteConfirmation = ( name, email ) => {
  return {
    from:`"${process.env.MAIL_USERNAME}"<${process.env.MAIL_USER}>`,
    to: email,
    subject: "Your profile with InkCentral has been deleted!",
    html:`
      <div>
        <h1>${name}</h1>
        <p>Your profile has been removed from our database.</p>
      </div>
    `
  }
}