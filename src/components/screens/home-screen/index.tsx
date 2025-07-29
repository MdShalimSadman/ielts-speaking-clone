"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslations, useLocale } from "next-intl";
import { getIeltsCourse } from "@/services/api/ieltsCourse.api";
import HeroBanner from "./sections/HeroBanner";
import CourseIndex from "./sections/course-card/CourseIndex";
import InstructorSection from "./sections/InstructorSection";
import WhatYouWillLearn from "./sections/WhatYouWillLearn";
import ExclusiveFeatures from "./sections/exclusive-features/ExclusiveFeaturesIndex";
import CourseFeaturesIndex from "./sections/course-features/CourseFeaturesIndex";
import CourseDetailIndex from "./sections/course-detail/CourseDetailIndex";
import SkeletonLoader from "@/utils/SkeletonLoader";
import { Button } from "@/components/ui/button";
import ChecklistSection from "./sections/course-card/CheckListSection";
import Cta from "./sections/course-card/Cta";
import ChecklistWrapper from "./sections/course-card/CheckListWrapper";

const HomeIndex = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const { data, isLoading } = useQuery({
    queryKey: ["ielts-course", locale],
    queryFn: () => getIeltsCourse(locale),
  });

  const course = data?.data.data;

  if (isLoading) return <SkeletonLoader />;

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
          <HeroBanner
            title={course?.title || ""}
            description={course?.description || ""}
            galleryItems={
              course?.media?.filter(
                (item) => item.name === "preview_gallery"
              ) || []
            }
          />
          <CourseIndex
            galleryItems={
              course?.media?.filter(
                (item) => item.name === "preview_gallery"
              ) || []
            }
            checklist={course?.checklist || []}
            ctaText={course?.cta_text.name || ""}
          />
        </div>
      </div>

      <div className="container flex flex-col gap-4 md:flex-row md:gap-12 mx-auto text-[#111827]">
        <div className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] px-4 xl:px-0">
          <div className="md:hidden">
            <Cta price="৳1000" ctaText={course?.cta_text.name || ""} />
            <ChecklistWrapper checklist={course?.checklist || []} />
          </div>
          <InstructorSection
            instructors={
              course?.sections?.find(
                (section) => section.type === "instructors"
              )?.values || []
            }
            title={t("instructor")}
          />

          <CourseFeaturesIndex
            items={
              course?.sections?.find((section) => section.type === "features")
                ?.values || []
            }
            title={t("laid_out")}
          />

          <WhatYouWillLearn
            sections={course?.sections || []}
            title={t("what_to_learn")}
          />

          <ExclusiveFeatures
            features={
              course?.sections?.find(
                (section) => section.type === "feature_explanations"
              )?.values || []
            }
            title={t("exclusive_feature")}
          />

          <CourseDetailIndex
            details={
              course?.sections?.find((section) => section.type == "about")
                ?.values || []
            }
            title={t("course_details")}
          />
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
