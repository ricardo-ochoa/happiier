import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  // const [currentPath, setCurrentPath] = useState(window.location.pathname)
  // const handlePathChange = () => {
  //   setCurrentPath(window.location.pathname);
  // };
  // window.addEventListener('popstate', handlePathChange);
  // const isContactPage = currentPath === '/contacto';

  return (
    <Bounded as="footer" className="text-black-happiier ">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-black-happiier transition-colors duration-150 hover:text-black-happiier"
          >
            <Link
              href="/"
              aria-label="Home page"
              className="text-xl font-extrabold tracking-tighter text-slate-900"
            >
              <img src="/isotype.svg" alt="Happiier Studio" />
            </Link>
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-black-happiier sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-black-happiier ">
            © {new Date().getFullYear()}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-1 justify-center">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <PrismicNextLink
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold instagram transition-colors duration-150 hover:text-yellow-happiier",
                    )}
                    field={link}
                  >
                    {label}
                  </PrismicNextLink>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-black-happiier"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {isFilled.link(settings.data.instagram) && (
            <PrismicNextLink
              field={settings.data.instagram}
              className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125 hover:text-yellow-happiier"
              aria-label={"Happiier en Instagram"}
            >
              <FaInstagram />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.linkedin) && (
            <PrismicNextLink
              field={settings.data.linkedin}
              className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125  hover:text-yellow-happiier"
              aria-label={"Happiier en LinkedIn"}
            >
              <FaLinkedin />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.whatsapp) && (
            <PrismicNextLink
              field={settings.data.whatsapp}
              className="p-2 text-2xl text-black-happiier transition-all duration-150 hover:scale-125  hover:text-yellow-happiier"
              aria-label={"Happiier en WhatsApp"}
            >
              <FaWhatsapp />
            </PrismicNextLink>
          )}
        </div>
      </div>
    </Bounded>
  );
}
