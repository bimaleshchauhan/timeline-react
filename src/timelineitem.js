import React from "react";

const TimeLineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="time-line-content">
      <div className="circle"></div>
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <a href={data.link.url} target="_blank" rel="noreferrer">
        {data.link.text}
      </a>
    </div>
  </div>
);

export default TimeLineItem;
