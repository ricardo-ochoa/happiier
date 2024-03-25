"use client";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainOnlyText`.
 */
export type MainOnlyTextProps = SliceComponentProps<Content.MainOnlyTextSlice>;

/**
 * Component for "MainOnlyText" Slices.
*/
const MainOnlyText = ({ slice }: MainOnlyTextProps): JSX.Element => {
  const bgcolor = slice?.items?.map(i => i.bg_color)
  return (
    <div style={{
      backgroundColor: bgcolor ? `${bgcolor}` : '#ffffff',
    }}>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className=" prose-xl mt-20 mb-20">
          {
            slice.primary.bold_text && (
              <h3 className="italic">
                {slice.primary.bold_text}
              </h3>
            )
          }
          <div>
            <span className="font-extrabold">Somos un colectivo de profesionales</span> que unen su expertise para crear estrategias funcionales y hacer feliz a tu marca. Creadoras de la metodología Happiier que te da las herramientas adecuadas para establecer objetivos claros y una visión futura para tu negocio. Nos apasiona trabajar codo a codo contigo para identificar tus necesidades y convertirlas en soluciones visuales innovadoras y efectivas. Únete a nosotros en el viaje hacia la excelencia creativa y descubre cómo juntos podemos hacer que tu marca brille con luz propia.
          </div>

          {/* <PrismicRichText field={slice.primary.description} /> */}
        </div>
      </Bounded>
    </div >
  );
};

export default MainOnlyText;
