import { ISectionValue } from "@/types/ieltsCourse.type";
import FeatureCard from "./FeatureCard";

type Props = {
  items: ISectionValue[];
  title: string;
};

const CourseFeaturesIndex = ({ items, title }: Props) => (
  <div>
    <h2 className="mb-3 text-xl font-semibold leading-[30px]">{title}</h2>
    <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
      {items.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default CourseFeaturesIndex;
