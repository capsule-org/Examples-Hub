import React, { PropsWithChildren } from "react";
import FooterNavigation from "../components/footer-navigation";

type StepLayoutProps = {
  title: string;
  subtitle: string;
};

const StepLayout: React.FC<PropsWithChildren<StepLayoutProps>> = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col h-full animate-fade-in fill-both">
      <div className="border-b border-border p-4 bg-card animate-slide-in-from-top fill-both delay-1">
        <h2 className="text-xl font-semibold text-card-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <div className="flex-1 p-4 animate-slide-in-from-top fill-both delay-2">{children}</div>
      <div className="animate-slide-in-from-bottom fill-both delay-3">
        <FooterNavigation />
      </div>
    </div>
  );
};

export default StepLayout;
