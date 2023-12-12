import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RetractibleSidebar from "./RetractibleSidebar";
import MobileHeader from "./MobileHeader";
interface DashboardLayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  noGrid?: boolean;
  overflowStyle?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  headerTitle,
  overflowStyle = "auto",
  noGrid,
}) => {
  const [isRetractableMenuOpen, setIsRetractableMenuOpen] = useState(false);

  const pageTop = useRef<null | HTMLDivElement>(null);

  const scrollToTop = () => {
    pageTop.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col items-center h-[100vh] bg-[#fff] pb-[91px] w-full overflow-hidden">
      <div className="dashh">
        <div className="w-full flex">
          <Sidebar />
          <RetractibleSidebar
            isMenuOpen={isRetractableMenuOpen}
            dismiss={() => {
              setIsRetractableMenuOpen(false);
            }}
          />
        </div>
        <div
          className={`w-full h-[100vh] !relative ${
            !noGrid ? "dash-body" : "block"
          }`}
        >
          <div className="w-full flex z-9999">
            <Header headerTitle={headerTitle} />
            <MobileHeader
              openRetractableMenu={() => {
                setIsRetractableMenuOpen(!isRetractableMenuOpen);
              }}
            />
            <div ref={pageTop} />
          </div>
          <div
            className="w-full relative pb-[30px] h-full"
            style={{ overflow: overflowStyle }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
