import Navbar from "../components/layout/dashboard/Navbar"
import Sidenav from "../components/layout/dashboard/Sidenav"
import { Routes, Route } from "react-router-dom";
import routes from "../routes";
// import Footer from "../components/layout/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200/30">
      <Sidenav />
      <div className="p-4 xl:ml-80 ">
        <Navbar />
        <Routes>
          {routes.map(({ layout, pages }) =>
            layout === 'dashboard' &&
            pages.map(({ path, element, subPaths }) => (
              <>
                {path && <Route path={path} element={element} />}

                {subPaths &&
                  subPaths.map(({ path: subPath, element: subElement }) => (
                    <Route path={subPath} element={subElement} />
                  ))}
              </>
            ))
          )}
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard