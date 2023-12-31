// import nodemailer from 'nodemailer';
// import User from '@/models/userModel';
// import bcryptjs from 'bcryptjs';


// export const sendEmail = async ({ email, emailType, userId }: any) => {
//     try {
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//         if (emailType === 'VERIFY') {
//             await User.findByIdAndUpdate(userId, {
//                 verifyToken: hashedToken,
//                 verifyTokenExpiry: Date.now() + 3600000
//             });
//         } else if (emailType === 'RESET') {
//             await User.findByIdAndUpdate(userId, {
//                 forgotPassword: hashedToken,
//                 forgotPasswordTokenExpiry: Date.now() + 3600000
//             });
//         }

//         var transport = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//                 user: "a223f9e11ad25b",
//                 pass: "baa0f9260b7196"
//             }
//         });

//         const mailOptions={
//             from: "sayakbasak842@gmail.com",
//             to: email,
//             subject: emailType==="VERIFY" ? "Verify your email": "reset your password",
//             html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
//             or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
//             </p>`
//         }

//         const mailresponse=await transport.sendMail(mailOptions);  
//         // console.log(mailresponse);

//         return mailresponse;

//     } catch (error: any) {
//         console.log(error);
//         throw new Error(error.message);
//     }
// }

import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });

        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }


        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "fae32185202366",
              pass: "ed284a248f608f"
            }
          });


        const mailOptions = {
            from: 'siaassshane@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
        }

        const mailresponse = await transport.sendMail
            (mailOptions);
        return mailresponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}