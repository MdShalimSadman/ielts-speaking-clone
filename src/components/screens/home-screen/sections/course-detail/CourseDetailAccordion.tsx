"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FC } from "react";

interface CourseDetail {
  id: string;
  title: string;
  description: string;
}

interface Props {
  details: CourseDetail[];
}

const CourseDetailsAccordion: FC<Props> = ({ details }) => {
  return (
    <Accordion type="multiple" className="w-full">
      {details.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-dashed border-[#E1DBEB] ">
          <AccordionTrigger className=" cursor-pointer">
            <div
              dangerouslySetInnerHTML={{ __html: item.title }}
              className="text-left font-medium md:text-base mx-lg:text-sm"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ul
              className="list-disc pl-5 space-y-2 text-base text-gray-500"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseDetailsAccordion;
