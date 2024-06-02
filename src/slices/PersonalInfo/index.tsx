import { Content } from "@prismicio/client";
import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Image from 'next/image'
import Heading from "@/components/Heading";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaXTwitter, FaThreads, FaFacebookF, FaLink } from "react-icons/fa6";
/**
 * Props for `PersonalInfo`.
 */
export type PersonalInfoProps = SliceComponentProps<Content.PersonalInfoSlice>;

/**
 * Component for "PersonalInfo" Slices.
 */
const PersonalInfo = ({ slice }: PersonalInfoProps): JSX.Element => {

  return (
    <>
      {/* <div className=" bg-yellow-happiier ">
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="flex items-center md:flex-row md:items-center justify-between flex-col max-w-6xl mx-auto">
          <div className="">

            <div className="flex flex-row items-center">
              <Heading size="lg" className="text-black-happiier ml-10 lg:ml-0">
                {slice.primary.heading}
              </Heading>
              <img
                src={slice.primary.last_name_image.url || ""}
                alt={slice.primary.last_name_image.alt || ""}
                className="mt-[50px] h-full w-[50%] object-fill"
              />
            </div>

            <div className="flex justify-center lg:justify-start" style={{ margin: '0 auto' }} >
              {isFilled.link(slice.primary.portfolio) && (
                <PrismicNextLink
                  field={slice.primary.portfolio}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " portfolio"}
                >
                  <FaLink />
                </PrismicNextLink>
              )}

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
              {isFilled.link(slice.primary.threads) && (
                <PrismicNextLink
                  field={slice.primary.threads}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " on Threads"}
                >
                  <FaThreads />
                </PrismicNextLink>
              )}

              {isFilled.link(slice.primary.xlink) && (
                <PrismicNextLink
                  field={slice.primary.xlink}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " on X"}
                >
                  <FaXTwitter />
                </PrismicNextLink>
              )}

              {isFilled.link(slice.primary.facebook) && (
                <PrismicNextLink
                  field={slice.primary.facebook}
                  className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                  aria-label={slice.primary.heading + " on facebook"}
                >
                  <FaFacebookF />
                </PrismicNextLink>
              )}
            </div>
          </div>

          <Avatar
            image={slice.primary.avatar}
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 justify-self-center mt-4 md:mt-0"
          />
        </div>
      </Bounded >
    </div > */}
    </>
  );
};

export default PersonalInfo;
