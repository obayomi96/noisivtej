import React from "react";
import clsx from "clsx";
import { ReactComponent as NotificationIcon } from "../svgs/notification-icon.svg";
import Menu from "@mui/material/Menu";

interface HeaderProps {
  loggedIn?: boolean | null;
  currentUserInfo?: any;
  headerTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ loggedIn = true, headerTitle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={clsx({
        "hidden lg:flex z-10 top-0 items-center justify-between bg-[#FFFFFF] w-full h-[100px] m-auto mt-0 relative":
          true,
        "bg-[#FBFEF7]": loggedIn,
      })}
    >
      {loggedIn ? (
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-evenly">
          <div className="flex flex-col  pl-0 m-auto w-[100%] ml-3">
            <>
              <div className="text-[14px] font-[600]  ">
                {headerTitle ? headerTitle : "Welcome, Ayesha!"}
              </div>
              <p className="text-xs">
                {headerTitle
                  ? ""
                  : "Get and manage purchase orders. Stay on top of market trends"}
              </p>
            </>
          </div>
          <div className="flex items-center">
            <div className="w-[250px] mr-4">
              <input
                type="text"
                name="search"
                placeholder="Search.."
                autoComplete="off"
              />
            </div>
            <button
              className="ml-4"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <NotificationIcon />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="w-[250px] h-[300px] p-3">
                <p className="w-full border-b border-[#ddd]">Notifications</p>
                <div className="text-center mt-4 w-full h-full m-auto">
                  <p>Noting to see!</p>
                </div>
              </div>
            </Menu>
          </div>
          <div className="w-[50px]" />

          <div className="flex items-center justify-end mr-[50px] ">
            <div className="w-[20px]" />
            <div>
              <p className="text-xs font-bold ">Ayesha Habib</p>
              <p className="text-xs font-normal text-[#000]">
                AyeshaHabib@gmail.com
              </p>
            </div>
            <div className="w-[20px]" />
            <img
              src="/assets/images/avatar.png"
              alt="avatar"
              className="w-[40px] h-[40px] rounded-full ml-2"
            />
          </div>
        </div>
      ) : (
        <div className="w-full px-[5vw] flex items-center justify-between text-black my-4">
          <p className="font-gentiumBasic font-[700] text-[34px]">JetVision</p>
        </div>
      )}
    </div>
  );
};

export default Header;
