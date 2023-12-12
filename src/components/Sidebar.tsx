import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "./MenuItem";
import LogoutModal from "./LogoutModal";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const location = useLocation();

  const handleMenuClick = (path: string) => {
    navigate(`${path}`);
  };

  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <GridViewIcon />,
      activeIcon: <GridViewIcon />,
    },
    {
      path: "/requests",
      label: "Requests",
      icon: <ShoppingCartIcon stroke="#fff" />,
      activeIcon: <ShoppingCartIcon stroke="#fff" />,
    },
    {
      path: "/shipments",
      label: "Shipments",
      icon: <CardTravelIcon stroke="#fff" />,
      activeIcon: <CardTravelIcon stroke="#fff" />,
    },
    {
      path: "/logistics",
      label: "Logistics",
      icon: <LocalShippingIcon stroke="#fff" />,
      activeIcon: <LocalShippingIcon stroke="#fff" />,
    },
    {
      path: "/workplans",
      label: "Workplans",
      icon: <PlaylistAddCheckIcon stroke="#fff" />,
      activeIcon: <PlaylistAddCheckIcon stroke="#fff" />,
    },
    {
      path: "/analytics",
      label: "Analytics",
      icon: <BarChartIcon stroke="#fff" />,
      activeIcon: <BarChartIcon stroke="#fff" />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <SettingsIcon stroke="#fff" />,
      activeIcon: <SettingsIcon stroke="#fff" />,
    },
    {
      path: "/help",
      label: "Help",
      icon: <HelpIcon stroke="#fff" />,
      activeIcon: <HelpIcon stroke="#fff" />,
    },
  ];

  const bottomMenus = [
    {
      path: "",
      label: "Log out",
      icon: <LogoutIcon stroke="#fff" />,
      activeIcon: <LogoutIcon stroke="#fff" />,
    },
  ];
  return (
    <div className="hidden lg:block relative w-full bg-[#17A397] min-h-[100vh] text-sm font-semibold  border-t-0 border-[#d1d2d4]-500 min-w-[1024px]:left-0 lg:top-0 content-center lg:content-start text-left justify-between ml-0 pl-0 overflow-y-auto">
      <div className="font-[600] text-[#fff] text-[28px] flex justify-start pl-8  items-center pt-[50px] pb-0 px-[20px] w-full">
        JetVision
      </div>
      <p className="w-full text-xs font-normal text-black px-[20px] pl-8 mx-auto">
        By JetStreams
      </p>
      <div className="h-[50px]" />
      <div className="h-[100vh] flex flex-col justify-between">
        <div>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname.startsWith(item.path)}
              icon={
                location.pathname === item.path ? item.activeIcon : item.icon
              }
              label={item.label}
              onClick={() => {
                handleMenuClick(item.path);
              }}
            />
          ))}
        </div>

        <div className="w-[90%] my-[100px] h-auto mx-auto flex flex-col text-white text-center">
          <div className="font-bold">Warephase Technologies</div>
          <p className="font-normal text-xs">
            High street 123, Phoenix <br /> 85010, Arizona, USA.
          </p>
        </div>

        <div className="relative bottom-0">
          {bottomMenus.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname === item.path}
              icon={item.icon}
              label={item.label}
              onClick={() => {
                setIsLogoutModal(true);
              }}
            />
          ))}
        </div>
      </div>
      <LogoutModal
        isVisible={isLogoutModal}
        closeModal={() => setIsLogoutModal(false)}
      />
    </div>
  );
};

export default Sidebar;
