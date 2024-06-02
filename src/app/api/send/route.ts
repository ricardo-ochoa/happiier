import { EmailTemplate, EmailThoughtsTemplate } from "@/components/EmailTemplate";
import ContactFormData from "@/interface/contactFormData";
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend("re_16F3jeYk_APWSuQEV95DHtPTagbVGkBFn");

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    let responseData;

    if (data.firstName && data.number && data.mail && data.message) {
      // Maneja el formulario de contacto
      const { firstName, number, mail, message } = data as ContactFormData;
      responseData = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["desarrollo.happiier@gmail.com", "hola@happiier.studio"],
        subject: "Mensaje de contacto",
        react: EmailTemplate({ firstName, number, mail, message }),
        text: "",
      });
    } else if (data.message) {
      // Maneja los pensamientos "Happiier"
      const { message } = data;
      responseData = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["desarrollo.happiier@gmail.com", "hola@happiier.studio"],
        subject: "Happiier thoughts",
        react: EmailThoughtsTemplate({ message }),
        text: "",
      });
    } else {
      throw new Error("Datos de solicitud no válidos");
    }

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json({ error: 'error' });
  }
}
