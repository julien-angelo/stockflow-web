import { NavLink, useLocation } from "react-router-dom";
import { cn } from "cn";

function SidebarNavItem({ item }) {
  const { pathname } = useLocation();

  console.log(pathname);

  const { badge, icon: Icon, label, to, activePaths = [item.to] } = item;

  const isActive = activePaths.includes(pathname);

  return (
    <NavLink
      to={to}
      className={cn({
        "flex items-center gap-3 w-full h-11 px-3 text-left text-sm font-medium": true,
        "text-muted-foreground hover:bg-muted hover:text-foreground": true,
        "bg-[#fdf1ed] text-[#a63d1d]": isActive,
      })}
    >
      <Icon className="size-4 shrink-0" />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-[#e35e38] px-1.5 py-0 rounded-full text-white text-[11px] font-semibold">
          {badge}
        </span>
      )}
    </NavLink>
  );
}

function SidebarNav({ items }) {
  return (
    <div>
      <ul className="space-y-1">
        {items.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SidebarNav;
