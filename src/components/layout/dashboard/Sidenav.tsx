/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "../../../routes";
import Divider from "../../Divider";

interface OpenMenuState {
  [key: string]: boolean;
}

export function Sidenav() {
  const fullPath = useLocation();
  const path = fullPath.pathname?.split("/dashboard/");
  const currentPath = path[1];
  const [openMenu, setOpenMenu] = useState<OpenMenuState>({});

  const toggleMenu = (menuName: any) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside className="fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-md transition-transform duration-300 xl:translate-x-0 border border-gray-600/50">
      <div className="relative">
        <Link to={"/"} className="flex flex-col justify-center items-start gap-2 lg:mt-8 lg:ml-8 ">
          <div className="flex gap-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610066785025523713/2iij3ydV_400x400.jpg"
              alt="logo"
              className="w-8 rounded-full"
            />
            <Typography variant="h5" className="text-start font-serif lg:mt-1">
              Orderly
            </Typography>
          </div>
          <Typography variant="h5" className="text-gray-700 font-serif lg:mt-2"> Fibonacci </Typography>
        </Link>
      </div>
      <div className="px-4 mt-2">
        <Divider color="gray-400" height="2" />
      </div>
      <div className="mt-2 mx-2">
        {routes.map(({ layout, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col ">
            {(layout === 'dashboard') && pages.map((page: any) => (
              <li key={page.name}>
                {page.subPaths ? (
                  <div>
                    <Button
                      variant={
                        page.path && currentPath === page.path.split("/")[1]
                          ? "gradient"
                          : "text"
                      }
                      color={
                        page.path && currentPath === page.path.split("/")[1]
                          ? "green"
                          : "black"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                      onClick={() => toggleMenu(page.name)}
                    >
                      <div className="text-xl">{page.icon}</div>
                      <Typography className="text-sm font-serif font-semibold ">
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
                        {page.subPaths.map((subPath: any) => (
                          <li key={subPath.name}>
                            <NavLink to={`/${layout}${subPath.path}`}>
                              {({ isActive }) => (
                                <Button
                                  variant={isActive ? "gradient" : "text"}
                                  color={isActive ? "green" : "black"}
                                  className="flex items-center gap-4 capitalize"
                                  fullWidth
                                >
                                  <div className="text-xl">{subPath.icon}</div>

                                  <Typography className="font-serif font-semibold text-sm">
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
                    {page.isAnotherLayout ? (
                      <div className="mt-3">
                        <div className="p-2 mt-2">
                          <hr />
                        </div>
                        <Link to={page.path} className={`flex mt-2 items-center gap-4 px-4 capitalize`}>
                          <div className="text-xl">{page.icon}</div>
                          <Typography className="text-sm font-serif font-semibold">
                            {page.name}
                          </Typography>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        {page.onSidenav && (
                          <NavLink to={`/${layout}${page.path}`}>
                            {() => (
                              <Button
                                variant={
                                  page.path &&
                                    currentPath === page.path.split("/")[1] &&
                                    fullPath.pathname.startsWith(`/${layout}`)
                                    ? "gradient"
                                    : "text"
                                }
                                color={
                                  page.path &&
                                    currentPath === page.path.split("/")[1] &&
                                    fullPath.pathname.startsWith(`/${layout}`)
                                    ? "green"
                                    : "black"
                                }
                                className={`flex items-center gap-4 px-4 capitalize`}
                                fullWidth
                              >
                                <div className="text-xl">{page.icon}</div>
                                <Typography className="text-sm font-serif font-semibold">
                                  {page.name}
                                </Typography>
                              </Button>
                            )}
                          </NavLink>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside >
  );
}

export default Sidenav;
