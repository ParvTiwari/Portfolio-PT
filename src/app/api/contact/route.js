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

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for contacting me!",
            html: `
            <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:30px;">
                <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
                
                <div style="background:linear-gradient(135deg, #14b8a6, #0ea5e9); padding:20px; text-align:center; color:white;">
                    <h2 style="margin:0;">Thanks for Reaching Out!</h2>
                </div>
                
                <div style="padding:30px; color:#334155;">
                    <p style="font-size:16px;">Hi <b>${name}</b>, 👋</p>
                    
                    <p style="font-size:15px; line-height:1.6;">
                    Thank you for contacting me through my portfolio.  
                    I've received your message and I'm glad you reached out.
                    </p>
                    
                    <p style="font-size:15px; line-height:1.6;">
                    I'll review your message and get back to you as soon as possible.
                    </p>

                    <div style="margin:30px 0; padding:15px; background:#f1f5f9; border-left:4px solid #14b8a6; font-style:italic;">
                    “Great things start with a simple conversation.”
                    </div>

                    <p style="font-size:15px;">
                    Warm regards,<br/>
                    <b style="color:#0f172a;">Parv Tiwari</b><br/>
                    <span style="color:#64748b;">92851 21000</span>
                    </p>
                </div>

                <div style="background:#f8fafc; text-align:center; padding:15px; font-size:12px; color:#94a3b8;">
                    This is an automated reply from my portfolio website.
                </div>

                </div>
            </div>
            `,
        });


        return Response.json({ success: true });
    }
    catch(error){
        return Response.json({ success: false }, { status: 500 })
    }
}