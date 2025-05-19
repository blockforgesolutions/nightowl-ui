import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/dashboard/Navbar";
import Sidenav from "../components/layout/dashboard/Sidenav";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";
// import Footer from "../components/layout/Footer";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutuna göre başlangıç durumunu ayarla
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
      <Sidenav collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`p-4 transition-all duration-300 ${
        isMobile 
          ? "ml-0" 
          : sidebarCollapsed 
            ? "lg:ml-20" 
            : "lg:ml-80"
      }`}>
        <Navbar  />
        <Routes>
          {routes.map(({ layout, pages }, routeIndex) =>
            layout === 'dashboard' &&
            pages.map(({ path, element, subPaths }, pageIndex) => (
              <React.Fragment key={`${routeIndex}-${pageIndex}`}>
                {path && <Route path={path} element={element} />}

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
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;