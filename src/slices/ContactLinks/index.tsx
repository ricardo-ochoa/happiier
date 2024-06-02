"use client";
import { useState, useEffect } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import { SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { Typography } from "@mui/material";
import ContactFormData from "@/interface/contactFormData";
import { useLottie } from "lottie-react";
import confetti from "../../../public/confetti.json";

/**
 * Props for `ContactLinks`.
 */
export type ContactLinksProps = SliceComponentProps<Content.ContactLinksSlice>;

/**
 * Component for "ContactLinks" Slices.
 */
const ContactLinks = ({ slice }: ContactLinksProps): JSX.Element => {
  const [showAnimation, setShowAnimation] = useState(false);

  const options = {
    animationData: confetti,
    loop: false,
  };
  const { View, play, stop } = useLottie(options);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    number: "",
    mail: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState({
    messageThoughts: "",
  });

  const handleChangeMessage = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormMessage({
      ...formMessage,
      [name]: value,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { firstName, number, mail, message } = formData;

    if (firstName && number && mail && message) {
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setFormData({
            firstName: "",
            number: "",
            mail: "",
            message: "",
          });
        } else {
          console.error("Error en el envío del formulario");
        }
      } catch (error) {
        console.error("Error en el envío del formulario:", error);
      }
    }
  }

  async function handleSubmitMessage(event: { preventDefault: () => void }) {
    event.preventDefault();

    const { messageThoughts } = formMessage;

    if (messageThoughts) {
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: messageThoughts }),
        });

        if (res.ok) {
          setFormMessage({
            messageThoughts: "",
          });
          setShowAnimation(true);
        } else {
          console.error("Error en el envío del formulario");
        }
      } catch (error) {
        console.error("Error en el envío del formulario:", error);
      }
    }
  }

  useEffect(() => {
    if (showAnimation) {
      play();
      setTimeout(() => {
        setShowAnimation(false);
        stop();
      }, 3000);
    }
  }, [showAnimation, play, stop]);

  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {showAnimation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-75">
          {View}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center">
        <div className="w-full px-5 md:mr-20">
          <p className="text-2xl text-black-happiier">{slice.primary.title}</p>
          <div className="mt-3">
            {isFilled.link(slice.primary.phone_link) && (
              <PrismicNextLink
                field={slice.primary.phone_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                {slice.primary.phone_title}
              </PrismicNextLink>
            )}
            <span className="text-3xl text-black-happiier"> · </span>
            {isFilled.link(slice.primary.mail_link) && (
              <PrismicNextLink
                field={slice.primary.mail_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                {slice.primary.mail}
              </PrismicNextLink>
            )}
          </div>

          <p className="mt-10 text-xl text-black-happiier">Redes sociales:</p>
          <div className="mt-3 flex items-center">
            {isFilled.link(slice.primary.whatsapp_link) && (
              <PrismicNextLink
                field={slice.primary.whatsapp_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en WhatsApp"}
              >
                <FaWhatsapp />
              </PrismicNextLink>
            )}
            {isFilled.link(slice.primary.instagram_link) && (
              <PrismicNextLink
                field={slice.primary.instagram_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Instagram"}
              >
                <FaInstagram />
              </PrismicNextLink>
            )}
            {isFilled.link(slice.primary.facebook_link) && (
              <PrismicNextLink
                field={slice.primary.facebook_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Facebook"}
              >
                <FaFacebook />
              </PrismicNextLink>
            )}
            {isFilled.link(slice.primary.linkedin_link) && (
              <PrismicNextLink
                field={slice.primary.linkedin_link}
                className="p-2 text-3xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
                aria-label={"Happiier en Facebook"}
              >
                <FaLinkedin />
              </PrismicNextLink>
            )}
          </div>
        </div>

        <div className="w-full">
          <Typography style={{ fontSize: "30px", fontWeight: 500, marginTop: "50px", marginBottom: "10px" }}>
            Contáctanos:
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Nombre:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Número de teléfono:
              </label>
              <input
                type="tel"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
                Correo electrónico:
              </label>
              <input
                type="email"
                name="mail"
                id="mail"
                value={formData.mail}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border-2 border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-yellow-happiier focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full mt-10">
        <Typography style={{ fontSize: "30px", fontWeight: 500, marginTop: "50px", marginBottom: "10px" }}>
          Happiier thoughts
        </Typography>
        <form onSubmit={handleSubmitMessage}>
          <div className="mb-4">
            <label htmlFor="messageThoughts" className="block text-sm font-medium text-gray-700">
              Compartenos tus pensamientos:
            </label>
            <textarea
              name="messageThoughts"
              id="messageThoughts"
              value={formMessage.messageThoughts}
              onChange={handleChangeMessage}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-2 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border-2 border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-yellow-happiier focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Compartir
          </button>
        </form>
      </div>
    </Bounded>
  );
};

export default ContactLinks;
