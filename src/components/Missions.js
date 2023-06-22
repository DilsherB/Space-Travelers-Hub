import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchMissions from "../redux/missions/missionsAPI";
import { join, leave } from "../redux/missions/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  const error = useSelector((state) => state.missions.error);

  const handleJoin = (id) => {
    dispatch(join({ id }));
  };
  const handleLeave = (id) => {
    dispatch(leave({ id }));
  };

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      {isLoading && (
        <h3
          className="rounded d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          Loading...
        </h3>
      )}
      {error && (
        <h2
          className="text-danger rounded d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          something went wrong
        </h2>
      )}
      {!(isLoading && error) && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="fw-bold">{mission.mission_name}</td>
                <td style={{ fontSize: "14px" }}>{mission.description}</td>
                <td style={{ verticalAlign: "middle" }}>
                  <button
                    type="button"
                    className={`btn btn-sm rounded-pill ${
                      mission.joined ? "btn-info" : "btn-secondary"
                    }`}
                    style={{ minWidth: "max-content" }}
                  >
                    {mission.joined ? "Active Member" : "Not A Member"}
                  </button>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      !mission.joined
                        ? "btn-outline-secondary"
                        : "btn-outline-danger"
                    }`}
                    style={{ minWidth: "max-content" }}
                    onClick={
                      !mission.joined
                        ? () => handleJoin(mission.id)
                        : () => handleLeave(mission.id)
                    }
                  >
                    {mission.joined ? "Leave Mission" : "Join Mission"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}{" "}
    </div>
  );
};

export default Missions;
