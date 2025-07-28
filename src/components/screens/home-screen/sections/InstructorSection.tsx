import { ISectionValue } from "@/types/ieltsCourse.type";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  instructors: ISectionValue[];
  title: string;
};

const InstructorSection = ({ instructors, title }: Props) => (
  <div className="mb-7 pt-4 pb-2 bg-white">
    <h2 className="mb-4 text-xl font-semibold md:text-2xl">{title}</h2>
    {instructors.map((instructor, index) => (
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
              href={`https://10minuteschool.com/skills/instructors/munzereen-shahid/`}
              className="inline-flex items-center group"
            >
              <span className="group-hover:text-green-500 transition-colors">{instructor.name}</span>
              <ChevronRight size={18} className="ml-1 text-gray-600 transition-colors" />
            </Link>
          </h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default InstructorSection;
