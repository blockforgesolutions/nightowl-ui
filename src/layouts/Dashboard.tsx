/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/dashboard/Navbar";
import Sidenav from "../components/layout/dashboard/Sidenav";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import routes from "../routes";
import { useAuth } from "../hooks/useAuth";
// import Footer from "../components/layout/Footer";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, isLoading } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/auth/sign-in");
    }
  },[user])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);

      if (width < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    // İlk yükleme için kontrol
    handleResize();

    // Ekran boyutu değişince kontrol
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // Sidebar durumunu güncellemek için kullanılacak fonksiyon
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-[#e2e3e8]">
      <Sidenav collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} userRole={user?.role.name!} />
      <div className={`p-4 transition-all duration-300 ${isMobile
        ? "ml-0"
        : sidebarCollapsed
          ? "lg:ml-20"
          : "lg:ml-80"
        }`}>
        <Navbar />
        <Routes>
          {routes.map(({ layout, pages }, routeIndex) =>
            layout === 'dashboard' &&
            pages.map(({ path, element, subPaths }, pageIndex) => (
              <React.Fragment key={`${routeIndex}-${pageIndex}`}>
                {/* Ana path'ler için */}
                {path && <Route path={path} element={element} />}

                {/* SubPath'ler için */}
                {subPaths &&
                  subPaths.map(({ path: subPath, element: subElement }, subPathIndex) => (
                    <Route
                      key={`${routeIndex}-${pageIndex}-${subPathIndex}`}
                      path={subPath}
                      element={subElement}
                    />
                  ))}
              </React.Fragment>
            ))
          )}
          {/* Default route - eğer hiçbir route match etmezse */}
          <Route path="/" element={<Navigate to="home" replace />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;