// @ts-nocheck
module.exports = {
  async send(ctx) {
    try {
      const { email } = ctx.request.body;

      if (!email || !email.includes("@")) {
        return ctx.badRequest("Valid email is required");
      }

      // Always use your verified sender email
      const emailData = {
        personalizations: [
          {
            to: [
              {
                email: "contact@upskillsconsulting.com",
              },
            ],
            subject: "New Email Subscription",
            // Add the subscriber's email to the reply-to field
            reply_to: {
              email: email,
            },
          },
        ],
        from: {
          email: "contact@upskillsconsulting.com", // Your verified sender
          name: "Your Application Name",
        },
        content: [
          {
            type: "text/plain",
            value: `New user subscribed with email: ${email}`,
          },
        ],
      };

      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("SendGrid API Error:", {
          status: response.status,
          statusText: response.statusText,
          errors: errorData,
        });
        throw new Error(`SendGrid API error: ${response.status}`);
      }

      return ctx.send({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Error in send function:", error);
      return ctx.badRequest("Unable to send email: " + error.message);
    }
  },
};
