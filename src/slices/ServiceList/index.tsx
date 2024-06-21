"use client";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from '@mui/material/Typography';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/**
 * Props for `ServiceList`.
 */
export type ServiceListProps = SliceComponentProps<Content.ServiceListSlice>;

/**
 * Component for "ServiceList" Slices.
 */
const ServiceList = ({ slice }: ServiceListProps): JSX.Element => {

  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const services = slice?.items

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-1200" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '15px', paddingRight: '15px', marginBottom: '5rem' }}>

        {services.map((service, index) => (
          <Accordion
            key={index}
            expanded={expanded === service.service_title}
            onChange={handleChange(`${service.service_title}`)}
            style={{ marginBottom: '30px' }}
          >
            <AccordionSummary
              expandIcon={expanded === service.service_title ? <HorizontalRuleIcon /> : <AddIcon />}
            >
              <Typography fontSize={'30px'} fontWeight={500}>{service.service_title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span style={{ fontSize: 'x-large' }}>
                <PrismicRichText field={service.service_description} />
              </span>
            </AccordionDetails>
          </Accordion>
        ))}

      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {/* <img src="/images/shirley.png" /> */}
          <div className="myCarousel">
            <h3>Maggye Montez</h3>
            <h4>Fundadora y directora de operaciones de Taquería El Chilanguito</h4>
            <p>
              Un equipo muy metódico,  disciplinado y responsable con todo lo propuesto en cada proyecto desde el branding hasta el seguimiento de los clientes en caso de ser necesario.  Solución de problemas en redes. Más de 1 año siendo parte del nuestro proyecto.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="/images/daniel.png" /> */}
          <div className="myCarousel">
            <h3>Carolina Cortes-Monroy</h3>
            <h4>Agencia de Viajes de Boca en Boca Cancún</h4>
            <p>
              A lo largo del camino he conocido muchas empresas de diseño, redes y Marketing y ninguna había entendido el concepto que quería para mi agencia de viajes. Happiier logró plasmar la imagen de mi marca, comprendieron todas mis ideas y me ayudaron a organizarlas para llegar al mejor logotipo que pudiera tener.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="/images/theo.png" /> */}
          <div className="myCarousel">
            <h3>Manu Navarro</h3>
            <h4>Social Media Manager | Grupo Posadas</h4>
            <p>
              Durante más de 8 años, hemos tenido el placer de colaborar con Happiier Studio, una agencia de redes sociales que destaca por su creatividad y responsabilidad excepcionales. Su habilidad para manejar marcas de renombre como Fiesta Americana y The Explorean ha demostrado su capacidad para generar ideas innovadoras y resultados impresionantes. Su compromiso y originalidad son inigualables en la industria.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="/images/theo.png" /> */}
          <div className="myCarousel">
            <h3>Jessica Muñoz</h3>
            <h4>Fundadora | Socio Naiz </h4>
            <p>
              Trabajar con Happiier en medio de la llegada de nuestro hijo fue un gran alivio. Fué como confiarle a nuestro primer bebé, para poder enfocarnos en el que estaba por llegar. Su capacidad, entrega, disciplina, proactividad nos hizo confiar ciegamente y sentir que teníamos a un equipo mientras estábamos ausentes. Gracias por su entrega, compromiso y gran trabajo.
            </p>
          </div>
        </div>
      </Carousel>

    </section>
  );
};

export default ServiceList;
