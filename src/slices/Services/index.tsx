"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */
export type Services = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "TechList" Slices.
 */
const Services = ({ slice }: Services): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".service-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-700, -500)
              : gsap.utils.random(700, 500);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-7 mt-4  text-yellow-happiier" as="h3">
          {slice.primary.heading}
        </Heading>
        <div className={
          "prose prose-xl prose-slate"
        }>
          {'Un equipo integrado que impulsa ideas hermosas hacia el éxito.'}
        </div>
      </Bounded>

      {slice.items.map(({ service_color, service_name }, index) => (
        <div
          key={index}
          className="service-row mb-6 flex items-center justify-center gap-5 text-slate-100"
          aria-label={service_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "service-item text-7xl font-extrabold tracking-tighter"
                }
                style={{
                  color: index === 7 && service_color ? service_color : "inherit",
                }}
              >
                <Link
                  href="/"
                  aria-label="Home page"
                >
                  {service_name}
                </Link>
              </span>
              <span className="text-2xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}

    </section>
  );
};

export default Services;
