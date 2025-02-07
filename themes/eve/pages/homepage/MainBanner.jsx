import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home h-screen bg-cover bg-center flex flex-col items-center justify-center">
      {/* <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2"> */}
        <div className="text-center md:text-left px-2 ">
          <h2 className="h1 text-black text-7xl font-extrabold font-['Poppins'] leading-[72px]">Unleash Your Inner Style Icon</h2>
          <p>Discover the Latest Trends and Elevate Your Wardrobe Today</p>
          <p></p>
          <a className="button button-primary" href="#">
            SHOW NOW
          </a>
        </div>
        <div />
      </div>
    // </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
