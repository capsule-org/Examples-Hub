import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-screen flex flex-col md:flex-row overflow-hidden">{children}</div>;
};

export default Layout;
