import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
import { MdArrowBack } from "react-icons/md";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <Bounded as="article">
      <div className="rounded-2xl px-4 py-10 md:px-8 md:py-20">

        <div style={{
          marginBottom: '10px', backgroundColor: "#f8fafc", width: 'fit-content',
          padding: '5px',
          borderRadius: '10px'
        }}>
          <a href="/#portfolio" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MdArrowBack className="inline-block" />
            <p style={{ paddingLeft: '5px', fontSize: '12px' }}>Regresar a proyectos</p>
          </a>
        </div>
        <Heading as="h1" className="text-yellow-happiier">{page.data.title}</Heading>
        <div className="flex gap-4 text-slate-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="font-medium mt-5">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b text-xl text-slate-400">
          {formattedDate}
        </p>
        <div className="prose prose-lg mt-12 mb-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
