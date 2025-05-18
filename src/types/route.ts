import { ReactElement } from "react";


export interface RouteBase {
    icon?: ReactElement;
    name: string;
    onSidenav?: boolean
}

export interface MainRoute extends RouteBase {
    path?: string;
    title?: string,
    element: ReactElement;
    subPaths?: undefined;
    isAnotherLayout?: boolean;
}

export interface SubRoute extends RouteBase {
    subPaths: {
        icon?: ReactElement;
        name: string;
        path: string;
        element: ReactElement;
        title?: string
    }[];
    path?: undefined;
    element?: undefined;
}