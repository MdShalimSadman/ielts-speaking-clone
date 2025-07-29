// components/ChecklistWrapper.tsx
import ChecklistSection from "./CheckListSection";
import { Checklist } from "@/types/ieltsCourse.type";

type Props = {
  checklist: Checklist[];
};

const ChecklistWrapper = ({ checklist }: Props) => {
  if (!checklist.length) return null;

  return (
    <div>
      <ChecklistSection checklist={checklist} />
    </div>
  );
};

export default ChecklistWrapper;
