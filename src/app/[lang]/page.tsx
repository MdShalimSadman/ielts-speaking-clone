"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getIeltsCourse } from "@/services/api/ieltsCourse.api";
import Image from "next/image";
import PlayIcon from "@/components/icons/PlayIcon";
import Gallery from "@/components/screens/trailer/Gallery";
import { Button } from "@/components/ui/button";
import ChecklistSection from "@/components/screens/trailer/CheckListSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [play, setPlay] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ielts-course", locale],
    queryFn: () => getIeltsCourse(locale),
  });

  return (
    <>
      <div
        className="min-h-[300px] md:min-h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.10minuteschool.com/images/ui_(1)_1716445506383.jpeg")',
        }}
      >
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px] mx-auto text-[#111827]">
          {/* left portion  */}
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <h1 className="text-white mb-2 text-xl font-semibold  md:text-4xl">
              {data?.data.data.title || ""}
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
              dangerouslySetInnerHTML={{
                __html: data?.data.data.description || "",
              }}
            />
          </div>

          {/* right portion  */}
          <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-12 md:absolute">
            <div className="md:sticky md:top-28">
              <div className="md:border border-[#E1DBEB]">
                <div className="hidden p-1 md:block ">
                  <div>
                    <Gallery
                      galleryItems={
                        data?.data.data.media?.filter(
                          (item) => item.name === "preview_gallery"
                        ) || []
                      }
                    />
                  </div>
                </div>
                <div className="hidden md:block w-full p-4">
                  <p className="text-2xl font-semibold md:mb-3">৳1000</p>
                  <Button className="md:w-full bg-[#1cab55] text-white whitespace-nowrap">
                    {data?.data.data.cta_text.name}
                  </Button>
                </div>
                {data?.data.data.checklist && (
                  <div className="hidden md:block">
                    <ChecklistSection checklist={data.data.data.checklist} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom portion  */}
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12 mx-auto text-[#111827]">
        <div className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {/* instructors  */}
          <div className="mb-7 pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {t("instructor")}
            </h2>
            {data?.data.data.sections
              ?.find((section) => section.type === "instructors")
              ?.values.map((instructor, index) => (
                <div
                  key={index}
                  className="flex items-center md:rounded-md md:border border-[#E1DBEB] md:p-5 gap-4 mb-4"
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{instructor.name}</h3>
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: instructor.description,
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
