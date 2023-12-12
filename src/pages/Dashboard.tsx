import React from "react";
import { Fade } from "react-slideshow-image";
import DashboardLayout from "../components/DashboardLayout";
import NewsUpdateCard from "../components/NewsUpdateCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-4 mt-[20px]">
        <div className="w-full mt-10">
          <h1 className="text-xl text-center">
            Your Dashboard will be live in
          </h1>
          <div className="w-full text-center flex justify-center items-baseline mt-4 mb-8">
            <div className="">
              <div className="text-[40px] font-[800]">00 :</div>
              <p className="text-xs">Days</p>
            </div>
            <div>
              <div className="text-[40px] font-[800]">00 :</div>
              <p className="text-xs">Hours</p>
            </div>
            :{" "}
            <div>
              <div className="text-[40px] font-[800]">00 :</div>
              <p className="text-xs">Minutes</p>
            </div>
            :{" "}
            <div>
              <div className="text-[40px] font-[800]">00</div>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          <p className="text-center text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </p>
        </div>

        <div className="w-full mt-[150px] flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 h-[400px] rounded-lg border border-[#ddd] p-4">
            <p className="font-[700] text-[20px]">Product features</p>
            <div>
              <Fade indicators={true}>
                <div className="each-slide">
                  <div>
                    <img src="/assets/images/bg.png" alt="slide 1" />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src="/assets/images/image1.jpg" alt="slide 2" />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src="/assets/images/image2.jpg" alt="slide 3" />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="w-4" />
          <div className="block lg:hidden h-4" />

          {/* THE DATA PASSED TO THE COMPONENTS BELOW WILL COME FROM AND API AND MAPPED */}
          <div className=" w-full lg:w-1/2 h-[500px] rounded-lg border border-[#ddd] p-4 overflow-y-scroll">
            <p className="font-[700] text-[20px]">News Updates</p>
            <div className="w-full h-full ">
              <NewsUpdateCard
                title=" JetStreams 2024 goals"
                description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es"
                date="12 November 2023"
                srcUrl="/assets/images/bg.png"
              />
              <NewsUpdateCard
                title="Exectpti titr"
                description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es"
                date="12 November 2023"
                srcUrl="/assets/images/image4.jpg"
              />
              <NewsUpdateCard
                title="Wall street journal"
                description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es"
                date="12 November 2023"
                srcUrl="/assets/images/image1.jpg"
              />
              <NewsUpdateCard
                title="Forbes new members"
                description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es"
                date="12 November 2023"
                srcUrl="/assets/images/image2.jpg"
              />
              <NewsUpdateCard
                title="Welcome to JetVision"
                description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es"
                date="12 November 2023"
                srcUrl="/assets/images/ctlogo.png"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
