import {
  HomeIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";

export enum NavigationRoute {
  Dashboard = "/",
  Activities = "/activities",
  Upload = "/upload",
}

export interface Navigation {
  name: string;
  route: NavigationRoute;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const navigations: Navigation[] = [
  {
    name: "Dashboard",
    route: NavigationRoute.Dashboard,
    icon: HomeIcon,
  },
  {
    name: "Activities",
    route: NavigationRoute.Activities,
    icon: SwitchHorizontalIcon,
  },
  {
    name: "Upload",
    route: NavigationRoute.Upload,
    icon: UploadIcon,
  },
];
