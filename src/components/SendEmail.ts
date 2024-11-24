import { Resend } from "resend";
import { redirect } from "next/navigation";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Utility to validate email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// SendEmail function
export const SendEmail = async (formdata) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  // Validate inputs
  if (!message || !name || !SenderEmail) {
    return {
      error: "All fields are required",
    };
  }

  if (!isValidEmail(SenderEmail)) {
    return {
      error: "Invalid email address",
    };
  }

  try {
    // Send email using Resend
    await resend.emails.send({
      from: "Your Name <your-verified-email@example.com>", // Replace with your verified email
      to: "fadhilzarani@gmail.com", // Replace with recipient email
      subject: `${name} From Contact Form.`,
      replyTo: SenderEmail,
      text: `Sender Email: ${SenderEmail}\n\nMessage:\n${message}`,
    });

    // Redirect after success
    return redirect("/");
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Failed to send email. Please try again later.",
    };
  }
};
