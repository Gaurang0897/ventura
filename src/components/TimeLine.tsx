import { biddingData } from "@/constant";
import { Fragment } from "react";

export default function TimeLine() {
  return (
    <>
      <div className="sm:border-2 rounded-xl sm:p-3 mt-5 w-full flex flex-col sm:items-center text-sm sm:pb-[90px]">
        <p className="w-full labels">IPO timeline</p>
        <div className="block sm:flex sm:justify-between w-fit sm:mt-0 mt-2">
          {biddingData.map((data) => {
            return (
              <Fragment key={data.title}>
                <div className="h-5 bg-[green] w-0.5 ml-5 sm:w-[11vw] sm:h-0.5 sm:mt-5 sm:ml-0"></div>
                <div className="flex gap-2 sm:block sm:relative">
                  <img
                    src={`/logos/tick.png`}
                    alt="go"
                    className="rounded-[100%] border-[1px] w-10 h-10"
                  />
                  <div className="sm:absolute sm:left-[-15px]">
                    <p className="labels sm:w-[8vw]">{data.title}</p>
                    <p className="grayLabels sm:w-[8vw]">{data.date}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
