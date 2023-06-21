import React from "react";
import { useSelector } from "react-redux";

const Missions = () => {
  const missions = useSelector((state) => state.missions.missionsArr);
  console.log(missions);
  return (
    <div>
      <h1>Missions</h1>
      {missions.map((mission) => {
        return (
          <div key={mission.mission_id}>
            <h2>{mission.mission_name}</h2>
            <p>{mission.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Missions;
