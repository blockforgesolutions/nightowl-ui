/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import routes from "../../../routes";
import Divider from "../../Divider";
import { hasAccess } from "../../../utils/check-role";

interface OpenMenuState {
  [key: string]: boolean;
}

interface SidenavProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  userRole: string
}

export function Sidenav({ collapsed, toggleSidebar, userRole }: SidenavProps) {
  const fullPath = useLocation();
  const path = fullPath.pathname?.split("/dashboard/");
  const currentPath = path[1];
  const [openMenu, setOpenMenu] = useState<OpenMenuState>({});
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu izle
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = (menuName: any) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside
      className={`fixed z-50 my-4 ml-4 h-[calc(100vh-32px)] rounded-md transition-all duration-300 bg-sidebar ${collapsed ? "w-16" : "w-72"
        } ${isMobile
          ? collapsed
            ? "translate-x-0"
            : "-translate-x-full"
          : "translate-x-0"
        }`}
    >
      <div className="relative">
        <div className="flex items-center justify-between px-4 lg:mt-8">
          {!collapsed && (
            <Link to={"/"} className="flex items-center gap-2">
              <Typography variant="h5" className="text-gray-50 font-onest">
                Club Name
              </Typography>
            </Link>
          )}

          {collapsed && (
            <Link to={"/"} className="flex justify-center w-full mt-4">
              <img
                src="https://thumbs.dreamstime.com/b/night-owl-logo-art-vector-design-59009450.jpg"
                alt="logo"
                className="w-10 rounded-3xl"
              />
            </Link>
          )}

          <button
            onClick={toggleSidebar}
            className={`flex items-center justify-center p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all ${collapsed ? "mx-auto mt-4" : ""
              }`}
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="px-4 mt-2">
          <Divider color="gray-50" height="2" />
        </div>
      )}

      <div className={`mt-4 ${collapsed ? "mx-1" : "mx-2"}`}>
        {routes.map(({ layout, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col">
            {layout === 'dashboard' &&
              pages
                .filter((page: any) => hasAccess(page.roles, userRole))
                .map((page: any) => (
                  <li key={page.name}>
                    {page.subPaths && !collapsed ? (
                      <div>
                        <Button
                          className={`flex items-center gap-4 capitalize ${page.path && currentPath === page.path.split("/")[1]
                              ? "text-white"
                              : "text-gray-200 bg-transparent"
                            }`}
                          fullWidth
                          onClick={() => toggleMenu(page.name)}
                        >
                          <div className="text-xl">{page.icon}</div>
                          <Typography className="text-sm font-onest font-semibold">
                            {page.name}
                          </Typography>
                          <div
                            className={`ml-auto transition-transform ${openMenu[page.name] ? "rotate-180" : "rotate-0"
                              }`}
                          >
                            ▼
                          </div>
                        </Button>
                        {openMenu[page.name] && (
                          <ul className="pl-8 mt-2 space-y-2">
                            {page.subPaths
                              .filter((subPath: any) => hasAccess(subPath.roles, userRole))
                              .map((subPath: any) => (
                                <li key={subPath.name}>
                                  <NavLink to={`/${layout}${subPath.path}`}>
                                    {({ isActive }) => (
                                      <Button
                                        className={`flex items-center gap-4 capitalize ${isActive
                                            ? "text-white bg-onBar"
                                            : "text-gray-200 bg-transparent"
                                          }`}
                                        fullWidth
                                      >
                                        <div className="text-xl">{subPath.icon}</div>
                                        <Typography className="font-onest font-semibold text-sm">
                                          {subPath.name}
                                        </Typography>
                                      </Button>
                                    )}
                                  </NavLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <div>
                        {page.onSidenav && (
                          <NavLink to={`/${layout}${page.path}`}>
                            {({ isActive }) => (
                              <Button
                                className={`flex items-center ${collapsed ? "justify-center p-2" : "gap-4"
                                  } capitalize ${isActive
                                    ? "text-white bg-[#44405f]"
                                    : "text-gray-200 bg-transparent"
                                  }`}
                                fullWidth
                                title={collapsed ? page.name : ""}
                              >
                                <div className="text-xl">{page.icon}</div>
                                {!collapsed && (
                                  <Typography className="text-sm font-serif font-semibold">
                                    {page.name}
                                  </Typography>
                                )}
                              </Button>
                            )}
                          </NavLink>
                        )}
                      </div>
                    )}
                  </li>
                ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

export default Sidenav;