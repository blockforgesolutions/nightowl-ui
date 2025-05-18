import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { RiListIndefinite } from "react-icons/ri";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportAnalytics, TbShoppingBagCheck } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { MdOutlineSecurity, MdOutlineQrCodeScanner } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrCafeteria } from "react-icons/gr";



import Home from "./pages/dashboard/Home"
import OrderControl from "./pages/dashboard/OrderControl";
import Table from "./pages/dashboard/definitions/Table";
import Product from "./pages/dashboard/definitions/Product";
import Analytic from "./pages/dashboard/analtyics/Analytic";
import SignIn from "./pages/auth/SignIn";
import Kitchen from "./pages/dashboard/Kitchen";
import Person from "./pages/dashboard/persons/Person";
import Authorize from "./pages/dashboard/persons/UserAuthorize";
import CafeSettings from "./pages/dashboard/settings/CafeSettings";
import { FiPrinter } from "react-icons/fi";
import PrinterSettings from "./pages/dashboard/settings/PrinterSettings";
import QRHome from "./pages/qr-menu/Home";
import { MainRoute, SubRoute } from "./types/route";
import Profile from "./pages/dashboard/Profile";
import Account from "./pages/dashboard/Account";


type Route = MainRoute | SubRoute;

export const routes: { layout: 'dashboard' | 'auth' | 'qr-menu'; title?: string, pages: Route[] }[] = [
    {
        layout: 'dashboard',
        title: "Ana Sayfa",
        pages: [
            {
                icon: <IoHomeOutline />,
                name: 'Ana Sayfa',
                path: '/home',
                element: <Home />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <TbShoppingBagCheck />,
                name: 'Siparişler',
                path: '/orders',
                element: <OrderControl />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <RiListIndefinite />,
                name: 'Tanımlamalar',
                subPaths: [
                    {
                        title: "",
                        icon: <HiOutlineTableCells />,
                        name: 'Masalar',
                        path: '/tables',
                        element: <Table />,
                    },
                    {
                        icon: <GiForkKnifeSpoon />,
                        name: 'Ürünler',
                        path: '/products',
                        element: <Product />
                    },
                ],
                onSidenav: true,
            },
            {
                icon: <CgScreen />,
                name: "Mutfak",
                path: "/kitchen",
                element: <Kitchen />,
                isAnotherLayout: false,
                onSidenav: true
            },
            {
                icon: <IoPersonOutline />,
                name: "Kullanıcılar",
                subPaths: [
                    {
                        icon: <IoPersonOutline />,
                        name: "Kullanıcılar",
                        path: '/persons',
                        element: <Person />
                    },
                    {
                        icon: <MdOutlineSecurity />,
                        name: "Yetkilendirme",
                        path: '/authorize',
                        element: <Authorize />
                    },
                ],
                onSidenav: true
            },
            {
                icon: <TbReportAnalytics />,
                name: 'Raporlar',
                path: '/analytics',
                element: <Analytic />,
                onSidenav: true
            },
            {
                icon: <CiSettings />,
                name: 'Ayarlar',
                subPaths: [
                    {
                        icon: <GrCafeteria />,
                        name: 'Cafe Ayarları',
                        path: '/cafe-settings',
                        element: <CafeSettings />
                    },
                    {
                        icon: <FiPrinter />,
                        name: 'Yazıcı Ayarları',
                        path: '/printer-settings',
                        element: <PrinterSettings />
                    }
                ],
                onSidenav: true
            },
            {
                icon: <MdOutlineQrCodeScanner />,
                name: 'QR Menu',
                path: '/qr-menu/home',
                element: <QRHome />,
                isAnotherLayout: true,
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