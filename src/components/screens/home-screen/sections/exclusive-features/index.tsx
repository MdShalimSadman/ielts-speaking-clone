import { ISectionValue } from "@/types/ieltsCourse.type";
import ExclusiveFeatureCard from "./ExclusiveFeatureCard";

type Props = {
  features: ISectionValue[];
  title: string;
};

const ExclusiveFeaturesIndex = ({ features, title }: Props) => (
  <div className="flex flex-col gap-3 my-10">
    <h2 className="text-xl font-semibold leading-7">{title}</h2>
    <div className="grid grid-cols-1 px-5 border border-[#E1DBEB] divide-y divide-[#E1DBEB] rounded-md">
      {features.map((item, idx) => (
        <ExclusiveFeatureCard
          key={item.id || idx}
          title={item.title}
          checklist={item.checklist}
          imageUrl={item.file_url}
        />
      ))}
    </div>
  </div>
);

export default ExclusiveFeaturesIndex;
