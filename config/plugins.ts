module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: "contact@upskillsconsulting.com",
        defaultReplyTo: "contact@upskillsconsulting.com",
      },
    },
  },
});
