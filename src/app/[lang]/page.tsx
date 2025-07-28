"use client";

import { useTranslations, useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getIeltsCourse } from "@/services/api/ieltsCourse.api";
import Image from "next/image";
import Gallery from "@/components/screens/trailer-card/Gallery";
import { Button } from "@/components/ui/button";
import ChecklistSection from "@/components/screens/trailer-card/CheckListSection";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import FeatureCard from "@/components/screens/FeatureCard";
import WhatYouWillLearn from "@/components/screens/WhatYouWillLearn";
import CourseDetailsAccordion from "@/components/screens/courseDetailAccordion";
import ExclusiveFeatureCard from "@/components/screens/ExclusiveFeatureCard";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

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
                  <Button className="md:w-full bg-[#1cab55] text-white whitespace-nowrap cursor-pointer">
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
                    <h3 className="text-lg font-medium">
                      <Link
                        href="https://10minuteschool.com/skills/instructors/munzereen-shahid/"
                        className="inline-flex items-center group"
                      >
                        {/* Name */}
                        <span className="group-hover:text-green-500 transition-colors">
                          {instructor.name}
                        </span>

                        {/* Arrow icon */}
                        <ChevronRight
                          size={18}
                          className="ml-1 text-gray-600 transition-colors"
                        />
                      </Link>
                    </h3>
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
          {/* how the course is laid out  */}
          <div>
            <h2 className="mb-3  text-xl font-semibold leading-[30px]">
              {t("laid_out")}
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
              {data?.data.data.sections
                ?.find(
                  (section) => section.name === "How the course is laid out"
                )
                ?.values.map((item) => (
                  <FeatureCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
            </div>
          </div>
          {/* what you will learn */}
          <WhatYouWillLearn
            sections={data?.data.data.sections || []}
            title={t("what_to_learn")}
          />
          {/* Course Exclusive Feature */}
          <div className="flex flex-col gap-3 my-10">
            <h2 className="text-xl font-semibold leading-7">
              {t("exclusive_feature")}
            </h2>
            <div className="grid grid-cols-1 px-5 border border-[#E1DBEB] divide-y divide-[#E1DBEB] rounded-md">
              {data?.data.data.sections
                ?.find((section) => section.name === "Course Exclusive Feature")
                ?.values.map((item, idx) => (
                  <ExclusiveFeatureCard
                    key={item.id || idx}
                    title={item.title}
                    checklist={item.checklist}
                    imageUrl={item.file_url}
                  />
                ))}
            </div>
          </div>

          {/* Course Details  */}
          <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-10 ">
            <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
              {t("course_details")}
            </h2>
            <div className="rounded-lg py-2 md:border md:border-[#E1DBEB] md:px-5 ">
              {data?.data.data.sections?.find(
                (section) => section.name === "Course details"
              )?.values && (
                <CourseDetailsAccordion
                  details={
                    data.data.data.sections.find(
                      (section) => section.name === "Course details"
                    )?.values || []
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
