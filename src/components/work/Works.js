import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  return (
    <div>
      <div className="work_filters">
        <div className="work_container container grid ">
          {
            projectsData.map((item)=>{
              return <WorksItems {...item} key={item.id} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Works;
