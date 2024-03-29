import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactLinks`.
 */
export type ContactLinksProps = SliceComponentProps<Content.ContactLinksSlice>;

/**
 * Component for "ContactLinks" Slices.
 */
const ContactLinks = ({ slice }: ContactLinksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_links (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactLinks;
