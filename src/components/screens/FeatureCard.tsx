import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const FeatureCard=({ icon, title, subtitle }: FeatureCardProps)=> {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium leading-[26px] text-white ">{title}</p>
        <p className="text-sm font-normal leading-[22px] text-[#9CA3AF]">{subtitle}</p>
      </div>
    </div>
  );
}

export default FeatureCard;