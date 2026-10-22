import React from "react";

import { SidebarHeader, SidebarNav, SidebarProfile } from "./com";

function Sidebar() {
  return (
    <div className="w-60 border-r border-border bg-background">
      <SidebarHeader />
      <SidebarNav />
      <SidebarProfile />
    </div>
  );
}

export default Sidebar;
