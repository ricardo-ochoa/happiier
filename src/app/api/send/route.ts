import { EmailTemplate, EmailThoughtsTemplate } from "@/components/EmailTemplate";
import ContactFormData from "@/interface/contactFormData";
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend("re_16F3jeYk_APWSuQEV95DHtPTagbVGkBFn");
// const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(req: NextRequest) {
  try {
      const { firstName, number, mail, message } = await req.json() as ContactFormData;

      const responseData = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["desarrollo.happiier@gmail.com", "hola@happiier.studio"],
        subject: "Mensaje de contacto",
        react: EmailTemplate({ firstName, number, mail, message }),
        text: "",
      });

      return NextResponse.json(responseData);
  } catch (error) {
      return NextResponse.json({ error });
  }
}

export async function POSTMESSAGE(req: { json: () => PromiseLike<{ message: any; }> | { message: any; }; }) {
  try {
    const { message } = await req.json();

    const responseData = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["desarrollo.happiier@gmail.com", "hola@happiier.studio"],
      subject: "Happiier thoughts",
      react: EmailThoughtsTemplate({
        message,
      }),
      text: "",
    });

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json({ error });
  }
}