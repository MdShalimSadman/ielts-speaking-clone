import Gallery from "./Gallery";
import { Checklist, Medium } from "@/types/ieltsCourse.type";
import Cta from "./Cta";
import ChecklistWrapper from "./CheckListWrapper";

type Props = {
  galleryItems: Medium[];
  checklist: Checklist[];
  ctaText: string;
};

const CourseIndex = ({ galleryItems, checklist, ctaText }: Props) => (
  <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
    <div className="md:sticky md:top-28">
      <div className="md:border border-[#E1DBEB]">
        <div className="hidden p-1 md:block">
          <Gallery galleryItems={galleryItems} />
        </div>
        <div className="hidden md:block w-full p-4">
          <Cta price="৳1000" ctaText={ctaText} />
          <ChecklistWrapper checklist={checklist} />
        </div>
      </div>
    </div>
  </div>
);

export default CourseIndex;
