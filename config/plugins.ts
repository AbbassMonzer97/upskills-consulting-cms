module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: "abbassmonzer1997@gmail.com", // Your verified SendGrid email
        defaultReplyTo: "abbassmonzer1997@gmail.com", // Default reply-to email
      },
    },
  },
});
