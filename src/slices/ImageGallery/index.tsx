import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MdArrowBack } from "react-icons/md";

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
      <div className="masonry sm:masonry-sm md:masonry-md mb-20" >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.url || "Image"}
              alt={img.alt || "Image"}
              className="rounded-lg p-4 break-inside"
            />
          </div>
        ))}
      </div>
      <div style={{
        marginTop: '40px', backgroundColor: "#f8fafc", padding: '5px', borderRadius: '10px', margin: "0 auto",
      }}>
        <a href="/#portfolio" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MdArrowBack className="inline-block" />
          <p style={{ paddingLeft: '5px', fontSize: '12px' }}>Regresar a proyectos</p>
        </a>
      </div>
    </section>
  );
};

export default ImageGallery;
