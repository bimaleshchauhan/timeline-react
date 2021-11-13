import React from "react";
import timelinedata from "./data";
import TimeLineItem from "./timelineitem";

const TimeLine = () =>
  timelinedata &&
  timelinedata.length > 0 && (
    <div className="timeline-container">
      {timelinedata.map((data, index) => (
        <TimeLineItem data={data} key={index} />
      ))}
    </div>
  );

export default TimeLine;
