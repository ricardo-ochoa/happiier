import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamHappiier`.
 */
export type TeamHappiierProps = SliceComponentProps<Content.TeamHappiierSlice>;

/**
 * Component for "TeamHappiier" Slices.
 */
const TeamHappiier = ({ slice }: TeamHappiierProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for team_happiier (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TeamHappiier;
