import { ISectionValue } from "@/types/ieltsCourse.type";
import CourseDetailsAccordion from "./CourseDetailAccordion";


type Props = {
  details: ISectionValue[] ;
  title: string;
};

const CourseDetailIndex = ({ details, title }: Props) => (
  <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-10">
    <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">{title}</h2>
    <div className="rounded-lg py-2 md:border md:border-[#E1DBEB] md:px-5">
      <CourseDetailsAccordion details={details} />
    </div>
  </div>
);

export default CourseDetailIndex;
