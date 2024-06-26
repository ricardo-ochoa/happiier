import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

/**
 * Props for `Equipo`.
 */
export type EquipoProps = SliceComponentProps<Content.EquipoSlice>;

/**
 * Component for "Equipo" Slices.
 */
const Equipo = ({ slice }: EquipoProps): JSX.Element => {
  return (
    <div className=" bg-yellow-happiier">
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">

          <Heading size="xl" className="col-start-1 text-black-happiier">
            {slice.primary.heading}
          </Heading>

          <div className="prose prose-xl prose-slate col-start-1">
            <PrismicRichText field={slice.primary.description} />
            <div className="flex" >
              {isFilled.link(slice.primary.linkedin) && (
                <PrismicNextLink
                  field={slice.primary.linkedin}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " on LinkedIn"}
                >
                  <FaLinkedin />
                </PrismicNextLink>
              )}

              {isFilled.link(slice.primary.instagram) && (
                <PrismicNextLink
                  field={slice.primary.instagram}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " on Instagram"}
                >
                  <FaInstagram />
                </PrismicNextLink>
              )}
            </div>
          </div>

          {slice.primary.button_text && (
            <Button
              linkField={slice.primary.buntton_link}
              label={slice.primary.button_text}
            />
          )}


          <Avatar
            image={slice.primary.avatar}
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 justify-self-center"
          />

        </div>

      </Bounded>
    </div>
  );
};

export default Equipo;
