import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import fetchMissions from "../redux/missions/missionsAPI";
import fetchRockets from '../redux/rockets/thunks';
import ProfileItem from "../components/ProfileItem";

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const resercedMissions = missions.filter((item) => item.joined);
  const MissionsItems = resercedMissions.map((item) => item.name);

  const rockects = useSelector((state) => state.rockets.rockets);
  const resercedRockets = rockects.filter((item) => item.reserved);
  const rocketsItems = resercedRockets.map((item) => item.name);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
    if (!missions.length) dispatch(fetchRockets());
  });
  return (
    <div className="row">
      <ProfileItem items={MissionsItems} title="Mission" />
      <ProfileItem items={rocketsItems} title="Rockets" />
    </div>
  );
};

export default MyProfile;
