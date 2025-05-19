import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportAnalytics, TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrCafeteria } from "react-icons/gr";



import Home from "./pages/dashboard/Home"
import OrderControl from "./pages/dashboard/OrderControl";
import Product from "./pages/dashboard/definitions/Product";
import Analytic from "./pages/dashboard/analtyics/Analytic";
import SignIn from "./pages/auth/SignIn";
import Person from "./pages/dashboard/persons/Person";
import Authorize from "./pages/dashboard/persons/UserAuthorize";
import CafeSettings from "./pages/dashboard/settings/CafeSettings";
import QRHome from "./pages/qr-menu/Home";
import { MainRoute, SubRoute } from "./types/route";
import Profile from "./pages/dashboard/Profile";
import Account from "./pages/dashboard/Account";


type Route = MainRoute | SubRoute;

export const routes: { layout: 'dashboard' | 'auth' | 'qr-menu'; title?: string, pages: Route[] }[] = [
    {
        layout: 'dashboard',
        title: "Dashboard",
        pages: [
            {
                icon: <IoHomeOutline />,
                name: 'Dashboard',
                path: '/home',
                element: <Home />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <TbShoppingBagCheck />,
                name: 'Orders',
                path: '/orders',
                element: <OrderControl />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <GiForkKnifeSpoon />,
                name: 'Products',
                path: '/products',
                element: <Product />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <IoPersonOutline />,
                name: "Users",
                subPaths: [
                    {
                        icon: <IoPersonOutline />,
                        name: "users",
                        path: '/persons',
                        element: <Person />
                    },
                    {
                        icon: <MdOutlineSecurity />,
                        name: "Authorization",
                        path: '/authorize',
                        element: <Authorize />
                    },
                ],
                onSidenav: true
            },
            {
                icon: <TbReportAnalytics />,
                name: 'Reports',
                path: '/analytics',
                element: <Analytic />,
                onSidenav: true
            },
            {
                icon: <CiSettings />,
                name: 'Settings',
                subPaths: [
                    {
                        icon: <GrCafeteria />,
                        name: 'Club Settings',
                        path: '/cafe-settings',
                        element: <CafeSettings />
                    },
                ],
                onSidenav: true
            },
            {
                name: 'Profil',
                path: '/profile',
                element: <Profile />,
                isAnotherLayout: false,
                onSidenav: false
            },
            {
                name: 'Hesap',
                path: '/account',
                element: <Account />,
                isAnotherLayout: false,
                onSidenav: false
            },
        ]
    },
    {
        layout: 'auth',
        pages: [
            {
                icon: <TbReportAnalytics />,
                name: 'Giriş',
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    },
    {
        layout: 'qr-menu',
        title: 'QR Menü',
        pages: [
            {
                icon: <IoHomeOutline />,
                name: 'Ana Sayfa',
                path: '/home',
                element: <QRHome />
            },
        ]
    }
]

export default routes