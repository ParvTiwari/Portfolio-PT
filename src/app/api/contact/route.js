import nodemailer from "nodemailer";

export async function POST(req){
    const {name, email, message} = await req.json();

    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Contact from ${name}`,
            html: `
                <h3>New Contact Message</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return Response.json({ success: true });
    }
    catch(error){
        return Response.json({ success: false }, { status: 500 })
    }
}