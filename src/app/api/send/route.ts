import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_16F3jeYk_APWSuQEV95DHtPTagbVGkBFn");
//const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    firstName: string;
    number: string;
    mail: string;
    message: string;
  }

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["desarrollo.happiier@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John", number:'9988776655', mail:'hola@gmail.com',  message: 'Hola, estoy interesado en un proyecto.' }),
//       text: "",
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

export async function POST({firstName, number, mail, message}:ContactFormData ) {
    try {
      const responseData = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["desarrollo.happiier@gmail.com"],
        subject: "Mensaje de contacto",
        react: EmailTemplate({ firstName, number, mail, message }),
        text: "",
      });
  
      return NextResponse.json(responseData);
    } catch (error) {
      return NextResponse.json({ error });
    }
}