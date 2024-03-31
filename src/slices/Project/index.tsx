import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

const client = createClient();
const projects = await client.getAllByType("project");

const Project = ({ slice }: ProjectProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project (variation: {slice.variation}) Slices
    </section>
  );
};

export default Project;
