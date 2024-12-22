module.exports = {
  async send(ctx) {
    console.log("3333333333333", ctx);
    const { email } = ctx.request.body; // Get email from request body

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    try {
      // Send email via SendGrid API
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, // Use your SendGrid API key
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "abbassmonzer1997@gmail.com" }],
              subject: "New Email Subscription",
            },
          ],
          from: { email: "no-reply@yourdomain.com" },
          content: [
            {
              type: "text/plain",
              value: `New user subscribed with email: test.com`,
            },
          ],
        }),
      });
      console.log("resssssssssss", response);
      if (!response.ok) {
        throw new Error("Failed to send email via SendGrid");
      }

      return ctx.send({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return ctx.badRequest("Unable to send email");
    }
  },
};
