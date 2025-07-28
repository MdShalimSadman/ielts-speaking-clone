import { Checklist } from "@/types/ieltsCourse.type";
import Image from "next/image";


export default function ChecklistSection({
  checklist,
}: {
  checklist: Checklist[];
}) {
  return (
    <div className="px-4 pb-4">
      <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
      <ul className="space-y-3">
        {checklist.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <Image
              src={item.icon}
              alt={item.text}
              width={20}
              height={20}
              className="mt-1"
            />
            <span className="text-[15px] text-black leading-[22px]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
