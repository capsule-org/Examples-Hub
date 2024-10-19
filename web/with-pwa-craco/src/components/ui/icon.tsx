import React from "react";

type IconType = React.ComponentType<any> | string;

interface IconProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt="Icon"
        className="h-6 w-6"
      />
    );
  } else if (icon) {
    const IconComponent = icon;
    return <IconComponent className="h-6 w-6" />;
  } else {
    console.warn("Invalid icon prop type", typeof icon);
    return null;
  }
};

export default Icon;
