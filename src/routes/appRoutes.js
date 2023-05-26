import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout'
import HomePage from "../pages/home/HomePage"
import DefaultPage from '../pages/dashboard/DefaultPage'
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import MontagesPage from '../pages/montages/MontagesPage'
import CreditsPage from '../pages/credits/CreditsPage';
import SaasPage from '../pages/dashboard/SaasPage';
import AnalyticsPage from '../pages/dashboard/AnalyticsPage';

import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MapChannels from '../pages/montages/MapChannels/MapChannelsPage';
import PreviewConfigPage from '../pages/montages/PreviewConfigPage';
import MontagesRoot from '../pages/montages/MontagesRoot';

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <GridViewOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "AnalyticsPage",
        },
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "SaasPage",
        },
      },
    ],
  },
  {
    path: "/montages",
    element: <MontagesRoot />,
    state: "montages",
    sidebarProps: {
      displayText: "Montages",
      icon: <NoteAddOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <MontagesPage />,
        step: 1,
        state: "montages.index",
      },
      {
        path: "/montages/mapchannels",
        element: <MapChannels />,
        step: 2,
        state: "montages.mapchannels",
      },
      {
        path: "/montages/previewconfig",
        element: <PreviewConfigPage />,
        step: 3,
        state: "montages.previewconfig",
      },
    ],
  },
  {
    path: "/credits",
    element: <CreditsPage />,
    state: "credits",
    sidebarProps: {
      displayText: "Credits",
      icon: <MonetizationOnOutlinedIcon />,
    },
  },
];

export default appRoutes;