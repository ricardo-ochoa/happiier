import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa6";

/**
 * Props for `ContactLinks`.
 */
export type ContactLinksProps = SliceComponentProps<Content.ContactLinksSlice>;

/**
 * Component for "ContactLinks" Slices.
 */
const ContactLinks = ({ slice }: ContactLinksProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-5">
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
    </Bounded>
  );
};

export default ContactLinks;
