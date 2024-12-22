// src/api/email/routes/email.js

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/email/send",
      handler: "email.send", // This maps to the "send" method in the controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
