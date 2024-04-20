import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */

interface ImageData {
  dimensions: { width: number; height: number };
  alt: string;
  copyright: null | string;
  url: string;
  id: string;
  edit: { x: number; y: number; zoom: number; background: string };
}

const ImageGallery = ({ slice }: ImageGalleryProps): JSX.Element => {

  const imageMap = slice.items.map(item => item.image)
  const images = imageMap

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="masonry sm:masonry-sm md:masonry-md">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.url}
              alt={img.alt}
              className="rounded-lg p-4 break-inside"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
