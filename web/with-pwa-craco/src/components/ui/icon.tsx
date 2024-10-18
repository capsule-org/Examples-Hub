import React from "react";

type IconType = string | React.ComponentType<{ className?: string }>;

interface IconProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  if (typeof icon === "undefined") {
    console.warn("Icon prop is undefined");
    return null;
  }

  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt="Auth Icon"
        width={24}
        height={24}
      />
    );
  } else if (typeof icon === "function") {
    const IconComponent = icon;
    return <IconComponent className="h-6 w-6" />;
  } else {
    console.warn("Invalid icon prop type", typeof icon);
    return null;
  }
};

export default Icon;
