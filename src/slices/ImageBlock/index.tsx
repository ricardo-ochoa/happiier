import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */

const Image = ({ slice }: ImageProps): JSX.Element => {
  const images = [slice.primary.image]

  return (
    <div className="masonry sm:masonry-sm md:masonry-md">
      {images.map((image, index) => (
        <img
          className="my-10 md:my-14 lg:my-16"
          key={index}
          src={image.url}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Image;
