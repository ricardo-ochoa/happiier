"use client";
import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import ContentListRegular from "./ContentListRegular";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { Box } from "@mui/system";
import { FaInstagram, FaLinkedin, FaXTwitter, FaThreads, FaFacebookF, FaLink } from "react-icons/fa6";


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

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const personas = [
    {
      heading: 'Viviana',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHZfPdc1huKqPV_martinez.svg?auto=compress,format',
        alt: 'Martinez'
      },
      personaltype: 'Happiier',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkmGaSol0Zci9Q4W_vivi.webp?auto=format,compress',
        alt: 'Viviana Martinez Happier Studio',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkmGaSol0Zci9Q4W',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/viwillvi/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/happiier-studio-aa36b32bb/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Mar',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHbPPdc1huKqPc_Oliver.svg?auto=compress,format',
        alt: 'Oliver'
      },
      personaltype: 'Happiier',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkD7G0FLKBtrWzIT_mar.webp?auto=format,compress',
        alt: 'Mar Oliver Happier Studio',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkD7G0FLKBtrWzIT',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/marolitom/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/happiier-studio-aa36b32bb/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Paola',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHavPdc1huKqPa_lopez.svg?auto=compress,format',
        alt: 'Lopez'
      },
      personaltype: 'Happiier',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkD7HUFLKBtrWzIV_paoli.webp?auto=format,compress',
        alt: 'Paola Lopez Happier Studio',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkD7HUFLKBtrWzIV',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/paolpz91/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/happiier-studio-aa36b32bb/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Andrea',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHZ_Pdc1huKqPX_aguilar.svg?auto=compress,format',
        alt: 'Aguilar'
      },
      personaltype: 'Happiier',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkD7GkFLKBtrWzIS_andrea_aguilar.webp?auto=format,compress',
        alt: 'Andrea Aguilar Happier Studio',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkD7GkFLKBtrWzIS',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/happiier.studio/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/happiier-studio-aa36b32bb/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Mateo',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHZvPdc1huKqPW_mesa.svg?auto=compress,format',
        alt: 'Mesa'
      },
      personaltype: 'Happiier',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkEO80FLKBtrWzJd_mateo_vertical.webp?auto=format,compress',
        alt: 'Mateo Mesa Happier Studio',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkEO80FLKBtrWzJd',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/happiier.studio/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/happiier-studio-aa36b32bb/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Andrea',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHbfPdc1huKqPe_vallejoi.svg?auto=compress,format',
        alt: 'Vallejo'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZigOHPPdc1huKtp7_IMG_2500.JPG?auto=format,compress',
        alt: 'Andrea Vallejo Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZigOHPPdc1huKtp7',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: {
        link_type: 'Web',
        url: 'https://www.instagram.com/manosmoreenas/',
        target: '_blank'
      },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/vallejoandreea/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/morenavallejo/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Jade',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZkETKUFLKBtrWzJq_Robledo.svg?auto=compress,format',
        alt: 'Robledo'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZigN7_Pdc1huKtpu_jade.png?auto=format,compress',
        alt: 'Jade Robledo Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZigN7_Pdc1huKtpu',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: {
        link_type: 'Web',
        url: 'https://drive.google.com/drive/folders/1-4bPCBVBlvNjsB3CNzXY-wisNp2tI4li',
        target: '_blank'
      },
      instagram: { link_type: 'Any' },
      linkedin: { link_type: 'Any' },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Ricardo',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHa_Pdc1huKqPb_ochoa.svg?auto=compress,format',
        alt: 'Ochoa'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZigN7fPdc1huKtps_ochoa.png?auto=format,compress',
        alt: 'Ricardo Ochoa Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZigN7fPdc1huKtps',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: {
        link_type: 'Web',
        url: 'https://www.ochoagram.com/',
        target: '_blank'
      },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/ochoagram/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/ochoagram/',
        target: '_blank'
      },
      xlink: {
        link_type: 'Web',
        url: 'https://www.threads.net/@ochoagram',
        target: '_blank'
      },
      threads: {
        link_type: 'Web',
        url: 'https://www.threads.net/@ochoagram',
        target: '_blank'
      },
      facebook: {
        link_type: 'Web',
        url: 'https://www.threads.net/@ochoagram',
        target: '_blank'
      }
    },
    {
      heading: 'Daniela',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZiVHaPPdc1huKqPY_gomez.svg?auto=compress,format',
        alt: 'Gomez'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZigN7vPdc1huKtpt_daniela.png?auto=format,compress',
        alt: 'Daniela Gomez Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZigN7vPdc1huKtpt',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/danielagp17/',
        target: '_blank'
      },
      linkedin: {
        link_type: 'Web',
        url: 'https://www.linkedin.com/in/daniela-g%C3%B3mez-perera-a9128694/',
        target: '_blank'
      },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Color',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZigO5vPdc1huKtqm_nativo.svg?auto=compress,format',
        alt: 'Nativo'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZigN6_Pdc1huKtpq_juntos.png?auto=format,compress',
        alt: 'Color Nativo Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZigN6_Pdc1huKtpq',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: {
        link_type: 'Web',
        url: 'https://colornativo.pixieset.com/colornativofotografiapublicitaria/productobeniley/',
        target: ''
      },
      instagram: { link_type: 'Any' },
      linkedin: { link_type: 'Any' },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Fausto',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZkERUEFLKBtrWzJg_cejudo.svg?auto=compress,format',
        alt: 'Cejudo'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkERlEFLKBtrWzJk_fausto.webp?auto=format,compress',
        alt: 'Fausto Cejudo Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkERlEFLKBtrWzJk',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: { link_type: 'Any' },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/spark.audiovisual?igsh=MXBxbWJvbjB3MjRwaQ== ',
        target: '_blank'
      },
      linkedin: { link_type: 'Any' },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    },
    {
      heading: 'Bryan',
      last_name_image: {
        url: 'https://ochagram.cdn.prismic.io/ochagram/ZkERU0FLKBtrWzJh_Dalvez.svg?auto=compress,format',
        alt: 'Dalvez'
      },
      personaltype: 'Partner',
      avatar: {
        url: 'https://images.prismic.io/ochagram/ZkERW0FLKBtrWzJi_IMG_2121_SHU.png?auto=format,compress',
        alt: 'Bryan Dalvez Partner',
        dimensions: { width: 500, height: 500 },
        copyright: null,
        id: 'ZkERW0FLKBtrWzJi',
        edit: { x: 0, y: 0, zoom: 1, background: 'none' }
      },
      portfolio: {
        link_type: 'Web',
        url: 'https://vimeo.com/326444359?share',
        target: '_blank'
      },
      instagram: {
        link_type: 'Web',
        url: 'https://www.instagram.com/shv.real/',
        target: '_blank'
      },
      linkedin: { link_type: 'Any' },
      xlink: { link_type: 'Any' },
      threads: { link_type: 'Any' },
      facebook: { link_type: 'Any' }
    }
  ];

  const filteredPersonas = value === 0
    ? personas.filter(persona => persona.personaltype === 'Happiier')
    : personas.filter(persona => persona.personaltype === 'Partner');


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
            {(slice.primary.other_description.length > 1) ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="prose prose-xl prose-slate col-start-1">
                  <PrismicRichText field={slice.primary.description} />
                </div>
                <div className="prose prose-xl prose-slate col-start-2">
                  <PrismicRichText field={slice.primary.other_description} />
                </div>
              </div>
            ) : (
              <div className="prose prose-xl prose-slate col-start-1">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}

            <div className="flex">
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
            <Button linkField={slice.primary.buntton_link} label={slice.primary.button_text} />
          )}

          <Avatar
            image={slice.primary.avatar}
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 justify-self-center"
          />
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '10px', width: 'fit-content', margin: '0 auto', paddingRight: '10px', paddingLeft: '10px' }} className="mt-28">
          <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{ style: { fontWeight: 600, color: 'black!important', backgroundColor: 'black' } }}>
            <Tab label="Team" className='text-black-happiier font-bold'
              sx={{
                '&.Mui-selected': {
                  color: 'black',
                }
              }}
            />
            <Tab label="Partners" className='text-black-happiier font-bold'
              sx={{
                '&.Mui-selected': {
                  color: 'black',
                }
              }}
            />
          </Tabs>
        </div>

        {filteredPersonas.map((persona, index) => (
          <div key={index} className="flex items-center mt-28 md:flex-row md:items-center justify-between flex-col max-w-6xl mx-auto">
            <div>
              <div className="flex flex-row items-center">
                <Heading size="lg" className="text-black-happiier ml-10 lg:ml-0">
                  {persona.heading}
                </Heading>
                <img
                  src={persona.last_name_image.url}
                  alt={persona.last_name_image.alt}
                  className="mt-[50px] h-full w-[50%] object-fill"
                />
              </div>

              <div className="flex justify-center lg:justify-start" style={{ margin: '0 auto' }}>
                {isFilled.link(persona.portfolio) && (
                  <PrismicNextLink
                    field={persona.portfolio}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " portfolio"}
                  >
                    <FaLink />
                  </PrismicNextLink>
                )}

                {isFilled.link(persona.linkedin) && (
                  <PrismicNextLink
                    field={persona.linkedin}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " on LinkedIn"}
                  >
                    <FaLinkedin />
                  </PrismicNextLink>
                )}

                {isFilled.link(persona.instagram) && (
                  <PrismicNextLink
                    field={persona.instagram}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " on Instagram"}
                  >
                    <FaInstagram />
                  </PrismicNextLink>
                )}
                {isFilled.link(persona.threads) && (
                  <PrismicNextLink
                    field={persona.threads}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " on Threads"}
                  >
                    <FaThreads />
                  </PrismicNextLink>
                )}

                {isFilled.link(persona.xlink) && (
                  <PrismicNextLink
                    field={persona.xlink}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " on X"}
                  >
                    <FaXTwitter />
                  </PrismicNextLink>
                )}

                {isFilled.link(persona.facebook) && (
                  <PrismicNextLink
                    field={persona.facebook}
                    className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-black-happiier"
                    aria-label={persona.heading + " on facebook"}
                  >
                    <FaFacebookF />
                  </PrismicNextLink>
                )}
              </div>
            </div>

            {persona.avatar && (
              <Avatar
                image={persona.avatar}
                className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 justify-self-center mt-4 md:mt-0"
              />
            )}
          </div>
        ))}
      </Bounded>
    </div >
  );
};

export default Equipo;
