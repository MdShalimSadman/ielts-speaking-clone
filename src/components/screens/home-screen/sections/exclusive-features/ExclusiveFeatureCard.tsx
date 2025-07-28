import Image from "next/image";
import { Check } from "lucide-react";

interface ExclusiveFeatureCardProps {
  title: string;
  checklist: string[];
  imageUrl: string;
}

const ExclusiveFeatureCard =({
  title,
  checklist,
  imageUrl,
}: ExclusiveFeatureCardProps)=> {
  return (
    <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
      {/* Left side: text */}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-sm font-medium leading-7 text-[#111827] md:text-base">{title}</h2>
        {checklist.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-3 text-[#4B5563]"
          >
            <Check className="text-blue-500 w-4 h-4" />
            <p className="text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>

      {/* Right side: image */}
      <div className="mt-4 md:mt-0 md:ml-6 shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          priority
          width={230}
          height={180}
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default ExclusiveFeatureCard;
