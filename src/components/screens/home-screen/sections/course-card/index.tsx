import { Button } from "@/components/ui/button";
import Gallery from "./Gallery";
import ChecklistSection from "./CheckListSection";
import { Checklist, Medium } from "@/types/ieltsCourse.type";

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
          <p className="text-2xl font-semibold md:mb-3">৳1000</p>
          <Button className="md:w-full bg-[#1cab55] text-white whitespace-nowrap cursor-pointer">
            {ctaText}
          </Button>
        </div>
        {!!checklist.length && (
          <div className="hidden md:block">
            <ChecklistSection checklist={checklist} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default CourseIndex;
