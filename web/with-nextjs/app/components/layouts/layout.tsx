// Layout Component
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="min-h-screen flex flex-col md:flex-row">{children}</div>;
};

export default Layout;
