import React from "react";
import Image from "next/image";

type IconType = string | React.ComponentType<{ className?: string }>;

interface IconProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  if (typeof icon === "string") {
    return (
      <Image
        src={icon}
        alt="Auth Icon"
        width={24}
        height={24}
      />
    );
  } else {
    const IconComponent = icon;
    return <IconComponent className="h-6 w-6" />;
  }
};

export default Icon;
