import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchMissions from "../redux/missions/missionsAPI";

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  });
  return (
    <div>
      {missions.map((mission) => (
        <div key={mission.id}>
          {mission.joined ? (
            <ul>
              <li style={{ listStyle: "none" }}>{mission.name}</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default MissionProfile;
