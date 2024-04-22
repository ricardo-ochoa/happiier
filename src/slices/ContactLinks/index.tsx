"use client"
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import { SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { POST } from "@/app/api/send/route";

/**
 * Props for `ContactLinks`.
 */
export type ContactLinksProps = SliceComponentProps<Content.ContactLinksSlice>;

/**
 * Component for "ContactLinks" Slices.
 */
const ContactLinks = ({ slice }: ContactLinksProps): JSX.Element => {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName');
    const number = formData.get('number');
    const mail = formData.get('mail');
    const message = formData.get('message');

    // Verifica si los valores son distintos de null antes de continuar
    if (firstName !== null && number !== null && mail !== null && message !== null) {
      // Llama a la función POST para enviar el correo electrónico
      const response = await POST({ firstName: firstName as string, number: number as string, mail: mail as string, message: message as string });
      console.log(response); // Puedes hacer algo con la respuesta, como mostrar un mensaje al usuario
    }
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="w-full px-5 md:mr-20">
          <p className="text-2xl text-black-happiier">
            {slice.primary.title}
          </p>
          <div className="mt-3">
            {isFilled.link(slice.primary.phone_link) && (
              <PrismicNextLink
                field={slice.primary.phone_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                {slice.primary.phone_title}
              </PrismicNextLink>)
            }
            {
              <span className="text-3xl text-black-happiier"> · </span>
            }
            {isFilled.link(slice.primary.mail_link) && (
              <PrismicNextLink
                field={slice.primary.mail_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                {slice.primary.mail}
              </PrismicNextLink>)
            }

          </div>


          <p className="mt-10 text-xl text-black-happiier">
            Redes sociales:
          </p>
          <div className="mt-3 flex items-center">
            {isFilled.link(slice.primary.whatsapp_link) && (
              <PrismicNextLink
                field={slice.primary.whatsapp_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                <FaWhatsapp />
              </PrismicNextLink>
            )
            }
            {isFilled.link(slice.primary.instagram_link) && (
              <PrismicNextLink
                field={slice.primary.instagram_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Instagram"}
              >
                <FaInstagram />
              </PrismicNextLink>
            )
            }
            {isFilled.link(slice.primary.facebook_link) && (
              <PrismicNextLink
                field={slice.primary.facebook_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Facebook"}
              >
                <FaFacebook />
              </PrismicNextLink>
            )
            }
            {isFilled.link(slice.primary.linkedin_link) && (
              <PrismicNextLink
                field={slice.primary.linkedin_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Facebook"}
              >
                <FaLinkedin />
              </PrismicNextLink>
            )
            }
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre:</label>
              <input type="text" name="firstName" id="firstName" required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">Número de teléfono:</label>
              <input type="tel" name="number" id="number"
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Correo electrónico:</label>
              <input type="email" name="mail" id="mail" required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje:</label>
              <textarea name="message" id="message" required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              ></textarea>
            </div>

            <button
              onClick={async () => {
                const res = await fetch("/api/send", {
                  method: "POST",
                });
                const data = await res.json();
                console.log(data)
              }}
              className="w-full py-2 px-4 border-2 border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-yellow-happiier focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Bounded>
  );
};

export default ContactLinks;
