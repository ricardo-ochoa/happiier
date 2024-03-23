"use client";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "@/slices/Hero/Shapes";
import Video from "@/slices/Hero/Video";
import Bounded from "@/components/Bounded";
import gsap from "gsap";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="position-fixed z-index-[-1] grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2"
      >
        <Shapes />
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="mb-8 text-[clamp(2rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.name + " " + slice.primary.tag_line
            }
          >
            <span className="block  ">
              {renderLetters(slice.primary.name, "first")}
            </span>
            <span className="-ml-[0.0099em] block text-yellow-happiier  ">
              {renderLetters(slice.primary.tag_line, "last")}
            </span>
          </h1>
        </div>


      </section >
      <Video />
    </Bounded>
  );
};

export default Hero;
