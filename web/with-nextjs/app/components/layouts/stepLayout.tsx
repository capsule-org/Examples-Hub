import React, { PropsWithChildren } from "react";
import FooterNavigation from "../ui/footerNavigation";
import { on } from "events";

type StepLayoutProps = {
  title: string;
  subtitle: string;
};

const StepLayout: React.FC<PropsWithChildren<StepLayoutProps>> = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-slate-50 border-b p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="flex-1 p-4">{children}</div>
      <FooterNavigation />
    </div>
  );
};

export default StepLayout;
