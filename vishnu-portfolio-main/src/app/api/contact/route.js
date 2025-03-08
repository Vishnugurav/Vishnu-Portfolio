import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SENDER_USER, // Secure server-side variables
        pass: process.env.SENDER_PASS, // App Password here (not your Gmail password)
    },
});

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const mailOptions = {
            from: process.env.SENDER_USER,
            to: process.env.RECEIVER_USER,
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}
