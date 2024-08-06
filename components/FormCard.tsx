import { Divider } from "@nextui-org/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  info: string;
  icon: ReactNode;
  chosen?: boolean;
};

export const FormCard: React.FC<Props> = ({
  title,
  info,
  icon,
  chosen = false,
}) => (
  <div
    className={`FormCard relative max-w-full w-full h-full overflow-y-hidden flex items-center border-2 ${chosen ? "border-black" : "border-default-200"} p-5 rounded-[10px] overflow-hidden`}
  >
    <div className="w-full">
      <div className="flex flex-row items-center gap-2.5 space-y-1">
        {icon}
        <div className="font-bold text-[16px] leading-[24px]">{title}</div>
      </div>

      <Divider className="my-5" />

      <div className="h-5 space-x-4 text-[16px] leading-[24px] text-foreground-400">
        {info}
      </div>
    </div>
  </div>
);
