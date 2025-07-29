import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  price: string;
  ctaText: string;
};

const Cta = ({ price, ctaText }: Props) => (
  <div className="w-full p-4">
    <p className="text-2xl font-semibold mb-3">{price}</p>
    <Link href="https://app.10minuteschool.com/checkout">
      <Button className="!w-full bg-[#1cab55] text-white whitespace-nowrap cursor-pointer">
        {ctaText}
      </Button>
    </Link>
  </div>
);

export default Cta;
