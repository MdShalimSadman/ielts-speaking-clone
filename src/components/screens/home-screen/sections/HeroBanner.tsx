"use client";

import Image from "next/image";
import Gallery from "./course-card/Gallery";
import { Medium } from "@/types/ieltsCourse.type";

type Props = {
  galleryItems: Medium[];
  title: string;
  description: string;
};

const HeroBanner = ({ title, description, galleryItems }: Props) => (
  <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] px-4 xl:px-0">
   <div className="md:hidden">
   <Gallery galleryItems={galleryItems}/>
   </div>
    <h1 className="text-white mb-2 text-xl font-semibold  md:text-4xl">
      {title}
    </h1>
    <div className="mb-2">
      <button className="flex flex-row flex-wrap gap-2 text-white">
        <span className="inline-block">
          <Image
            src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
            priority
            alt="ratings"
            width={130}
            height={100}
          />
        </span>
        <span className="inline-block text-sm md:text-base">
          (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </span>
      </button>
    </div>
    <div
      className="text-gray-400 text-base"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

export default HeroBanner;
