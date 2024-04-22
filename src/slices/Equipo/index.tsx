import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import ContentListRegular from "./ContentListRegular";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { Box } from "@mui/system";


/**
 * Props for `Equipo`.
 */
export type EquipoProps = SliceComponentProps<Content.EquipoSlice>;

/**
 * Component for "Equipo" Slices.
 */
// const client = createClient();

// const happierTeam = await client.getAllByType("team_member");

const Equipo = ({ slice }: EquipoProps): JSX.Element => {

  // const [value, setValue] = useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };


  return (
    <div className=" bg-yellow-happiier">
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] mb-20">

          <div className="col-start-1 md:col-start-1">
            <Heading size="xl" className="text-black-happiier">
              {slice.primary.heading}
            </Heading>
          </div>

          <div className="prose prose-xl prose-slate col-start-1">
            {
              (slice.primary.other_description.length > 1) ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="prose prose-xl prose-slate col-start-1">
                    <PrismicRichText field={slice.primary.description} />
                  </div>
                  <div className="prose prose-xl prose-slate col-start-2">
                    <PrismicRichText field={slice.primary.other_description} />
                  </div>
                </div>
              ) :
                (
                  <div className="prose prose-xl prose-slate col-start-1">
                    <PrismicRichText field={slice.primary.description} />
                  </div>
                )
            }

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

        {/* <div style={{
          backgroundColor: '#fff',
          borderRadius: '10px', width: 'fit-content',
          margin: '0 auto', paddingRight: '10px', paddingLeft: '10px'
        }}>
          <Tabs value={value} onChange={handleChange} centered
            TabIndicatorProps={{ style: { fontWeight: 600, color: 'black!important' } }}
          >
            <Tab label="Team" className='text-black-happiier font-bold'
            />
            <Tab label="Partners" className='text-black-happiier font-bold' />
          </Tabs>
        </div> */}

        {/* <ContentListRegular /> */}
      </Bounded>
    </div >
  );
};

export default Equipo;
