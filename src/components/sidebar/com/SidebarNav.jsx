import { NavLink, useLocation } from "react-router-dom";

function SidebarNavItem({ item }) {
  const { pathname } = useLocation();

  console.log(pathname);

  const { badge, icon: Icon, label, to } = item;
  return (
    <NavLink
      to={to}
      className="flex items-center gap-3 w-full h-11 px-3 text-left text-sm font-medium"
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
