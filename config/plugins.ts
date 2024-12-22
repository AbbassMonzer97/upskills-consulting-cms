module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultFrom: "abbassmonzer1997@gmail.com", // Your verified SendGrid email
        defaultReplyTo: "abbassmonzer1997@gmail.com", // Default reply-to email
      },
    },
  },
});
