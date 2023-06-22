import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../redux/rockets/thunks";
import Rocket from "../components/Rocket";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (!rockets.length) dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {
        rockets.map((rocket) => <Rocket rocket={rocket} key={rocket} />)
      }
    </div>
  );
};

export default Rockets;
