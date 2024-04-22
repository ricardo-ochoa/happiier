import { EmailTemplate } from "@/components/EmailTemplate";
import ContactFormData from "@/interface/contactFormData";
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend("re_16F3jeYk_APWSuQEV95DHtPTagbVGkBFn");
//const resend = new Resend(process.env.RESEND_API_KEY);

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
      // Verifica si req.body es del tipo ContactFormData
      if (req.body instanceof Object) {
        const { firstName, number, mail, message } = req.body as unknown as ContactFormData;

        const responseData = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: ["desarrollo.happiier@gmail.com"],
          subject: "Mensaje de contacto",
          react: EmailTemplate({ firstName, number, mail, message }),
          text: "",
        });

        return NextResponse.json(responseData);
      } else {
        // Manejar el caso donde req.body no es del tipo esperado
        return NextResponse.json({ error: "El cuerpo de la solicitud no es válido" });
      }
    } catch (error) {
      return NextResponse.json({ error });
    }
}