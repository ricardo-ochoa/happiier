"use client";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from '@mui/material/Typography';


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
  console.log(slice?.items[0].service_description)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-1200" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '15px', paddingRight: '15px' }}>

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

    </section>
  );
};

export default ServiceList;
