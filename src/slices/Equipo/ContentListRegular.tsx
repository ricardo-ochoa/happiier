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
import { createClient } from "@/prismicio";
type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.BlogPostIndexSlice["primary"]["content_type"];
  fallbackItemImage: Content.BlogPostIndexSlice["primary"]["fallback_item_image"];
  viewMoreText: Content.BlogPostIndexSlice["primary"]["view_more_text"];
};

// const client = createClient();
// const happierTeam = await client.getAllByType("team_member");


export default function ContentList() {

  // console.log(happierTeam[0].data.slices[0]?.primary)
  // const vivi = [happierTeam[0].data.slices[0]?.primary]

  return (
    <>
      {/* {
        vivi.map((member, index) => (
          <div key={index} className="flex items-center md:flex-row md:items-center justify-between flex-col max-w-6xl mx-auto">
            <div className="">

              <div className="flex flex-row items-center">
                <Heading size="lg" className="text-black-happiier ml-10 lg:ml-0">
                  {member.heading}
                </Heading>
                <img
                  src={member.last_name_image.url || ""}
                  alt={member.last_name_image.alt || ""}
                  className="mt-[50px] h-full w-[50%] object-fill"
                />
              </div>

              <div className="flex justify-center lg:justify-start" style={{ margin: '0 auto' }} >
                {isFilled.link(member.portfolio) && (
                  <PrismicNextLink
                    field={member.portfolio}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " portfolio"}
                  >
                    <FaLink />
                  </PrismicNextLink>
                )}

                {isFilled.link(member.linkedin) && (
                  <PrismicNextLink
                    field={member.linkedin}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " on LinkedIn"}
                  >
                    <FaLinkedin />
                  </PrismicNextLink>
                )}

                {isFilled.link(member.instagram) && (
                  <PrismicNextLink
                    field={member.instagram}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " on Instagram"}
                  >
                    <FaInstagram />
                  </PrismicNextLink>
                )}
                {isFilled.link(member.threads) && (
                  <PrismicNextLink
                    field={member.threads}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " on Threads"}
                  >
                    <FaThreads />
                  </PrismicNextLink>
                )}

                {isFilled.link(member.xlink) && (
                  <PrismicNextLink
                    field={member.xlink}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " on X"}
                  >
                    <FaXTwitter />
                  </PrismicNextLink>
                )}

                {isFilled.link(member.facebook) && (
                  <PrismicNextLink
                    field={member.facebook}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={member.heading + " on facebook"}
                  >
                    <FaFacebookF />
                  </PrismicNextLink>
                )}
              </div>
            </div>

            <Avatar
              image={member.avatar || "Image"}
              className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 justify-self-center mt-4 md:mt-0"
            />
          </div>
        ))
        } */}
    </>
  );
}
