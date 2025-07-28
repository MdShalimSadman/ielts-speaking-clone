"use client";

import { Check } from "lucide-react";

interface LearnItem {
  id: string;
  text: string;
}

interface Section {
  name: string;
  values: LearnItem[];
}

interface Props {
  sections: Section[];
  title: string;
}

const WhatYouWillLearn: React.FC<Props> = ({ sections, title }) => {
  const section = sections.find(
    (section) => section.name === "What you will learn by doing the course"
  );

  if (!section || !section.values?.length) return null;

  return (
    <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{title}</h2>
      <div className="rounded-md md:border md:border-[#E1DBEB] pt-2 md:p-6">
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
          {section.values.map((item) => (
            <li key={item.id} className="flex items-start gap-2 mb-2">
              <Check className="text-blue-500 mt-1 text-xl" />
              <div className="flex-1">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
